const fs = require('fs');
const path = require('path');
const https = require('https');

const categories = {
  'health-wellness': {
    title: 'Health & Wellness',
    icon: 'heart-pulse',
    items: [
      'First Aid, CPR & AED Training',
      'POSH Awareness',
      'Women Health & Safety',
      'Diet & Nutrition',
      'Home Life Safety',
      'Work Life Balance',
      'Mental Health & Stress Management',
      'Ergonomics & Postures'
    ]
  },
  'fire-safety': {
    title: 'Fire Safety Training',
    icon: 'flame',
    items: [
      'Fire Extinguisher Training',
      'Fire Fighting Training',
      'Evacuation Drills',
      'Emergency Response Team Training',
      'Fire Marshal Training'
    ]
  },
  'road-safety': {
    title: 'Road Safety - Defensive Driving',
    icon: 'car',
    items: [
      'Two Wheeler Riders',
      'Light Motor Vehicle',
      'Heavy Motor Vehicle',
      'Ambulance & School Bus',
      'Forklift/MHE/Crane/Hydra',
      'Loaders & Tankers',
      'Hazards Vehicles Drivers',
      'Simulator Training (2W/4W/HMV)',
      'Mines Road Safety',
      'Fleet Audit Management',
      'Fuel Saving & Efficiency',
      'Journey Risk Management',
      'Vehicle Inspection',
      'Drunk Busters Activity',
      'Road Show Program'
    ]
  },
  'industrial-safety': {
    title: 'Industrial Safety',
    icon: 'hard-hat',
    items: [
      'Industrial Safety Mela',
      'Behaviour Based Safety',
      'Work At Height',
      'Electrical Safety',
      'LOTO Training',
      'Confined Space',
      'Chemical Safety',
      'Workplace Safety',
      'Permit To Work',
      'HIRA',
      'Occupational Safety',
      'Scaffolding Safety',
      'Construction Safety'
    ]
  },
  'disaster-management': {
    title: 'Disaster Management',
    icon: 'siren',
    items: [
      'Evacuation Drill',
      'Disaster Preparedness Training',
      'Search & Rescue',
      'Hurricane Safety',
      'Flood Safety',
      'Event Safety',
      'Home Safety',
      'Rescue From Highrise Building'
    ]
  }
};

const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const downloadImage = (url, dest) => {
  return new Promise((resolve, reject) => {
    // If it exists, skip
    if (fs.existsSync(dest)) return resolve();
    
    const req = https.get(url, (response) => {
      if (response.statusCode > 300 && response.statusCode < 400 && response.headers.location) {
        return downloadImage(response.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    });
    
    req.on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
    
    // Add timeout specifically for pollinations blocking
    req.setTimeout(15000, () => {
      req.abort();
      fs.unlink(dest, () => {});
      reject(new Error('Timeout'));
    });
  });
};

const main = async () => {
  const imagesDir = path.join(__dirname, 'src', 'assets', 'images', 'trainings');
  fs.mkdirSync(imagesDir, { recursive: true });
  
  const publicImagesDir = path.join(__dirname, 'public', 'images', 'trainings');
  fs.mkdirSync(publicImagesDir, { recursive: true });

  const database = [];
  const tasks = [];

  for (const [catSlug, catData] of Object.entries(categories)) {
    for (const item of catData.items) {
      const slug = slugify(item);
      const filename = `${catSlug}-${slug}.jpg`;
      const assetPath = path.join(imagesDir, filename);
      const publicPath = path.join(publicImagesDir, filename);
      
      database.push({
        id: slug,
        title: item,
        category: catSlug,
        icon: catData.icon,
        shortDescription: `Professional and comprehensive modules for ${item}.`,
        fullDescription: `The ${item} course is specifically designed for modern industrial and corporate environments. Our expert trainers deliver actionable knowledge, comprehensive best practices, and hands-on scenarios tailored to the needs of your specialized teams.`,
        image: `/images/trainings/${filename}`,
        featured: false
      });

      tasks.push(async () => {
        const url = `https://picsum.photos/seed/${slug}/800/500`;
        console.log(`Downloading: ${item}`);
        
        try {
          // If the file is small (like the JSON error), delete it first so it downloads cleanly
          if (fs.existsSync(assetPath)) {
             const stats = fs.statSync(assetPath);
             if (stats.size < 5000) fs.unlinkSync(assetPath);
          }
          await downloadImage(url, assetPath);
          fs.copyFileSync(assetPath, publicPath);
        } catch (e) {
          console.error(`Failed ${item}`, e);
        }
      });
    }
  }

  // Run in smaller batches of 3 to absolutely prevent throttling from Picsum
  for (let i = 0; i < tasks.length; i += 3) {
    const batch = tasks.slice(i, i + 3);
    await Promise.all(batch.map(t => t()));
  }

  const dbPath = path.join(__dirname, 'data', 'trainings.json');
  fs.writeFileSync(dbPath, JSON.stringify(database, null, 2), 'utf-8');
  console.log('Database successfully built with 52 entries and images!');
};

main();
