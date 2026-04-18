const fs = require('fs');
const path = require('path');

const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const srcDir = path.join(__dirname, '..', 'src', 'assets', 'images', 'trainings');
const publicDir = path.join(__dirname, '..', 'public', 'images', 'trainings');
const dbPath = path.join(__dirname, '..', 'data', 'trainings.json');

const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

// Accept all modern web formats
const validExts = ['.webp', '.jpg', '.jpeg', '.png', '.avif'];
const files = fs.readdirSync(srcDir).filter(f => validExts.includes(path.extname(f).toLowerCase()));

let updated = 0;

// Hardcoded alias mapping for client discrepancies
const aliasMap = {
  'ambulance and schoolbus': 'Ambulance & School Bus',
  'working-at-height': 'Work At Height',
  'simulator training (2w-4w-hmv)': 'Simulator Training (2W/4W/HMV)',
  'heavy motor vehicles': 'Heavy Motor Vehicle',
  'light motor vehicle': 'Light Motor Vehicle',
  'loaders and tankers': 'Loaders & Tankers',
  'fleet-management-checklist': 'Fleet Audit Management',
  'forklif-mhe-crane-hydra': 'Forklift/MHE/Crane/Hydra',
  'electriccheck': 'Electrical Safety',
  'two wheeler riders': 'Two Wheeler Riders'
};

for (const file of files) {
  const ext = path.extname(file);
  const rawTitle = path.basename(file, ext).toLowerCase().trim();
  
  // Resolve alias if one exists, otherwise use raw title
  const searchTitle = aliasMap[rawTitle] ? aliasMap[rawTitle].toLowerCase() : rawTitle;
  
  const entryIndex = db.findIndex(t => t.title.toLowerCase().trim() === searchTitle);
  if (entryIndex !== -1) {
    const entry = db[entryIndex];
    // Rename to canonical slug pattern
    const newFilename = `${entry.category}-${entry.id}${ext}`;
    const destPath = path.join(publicDir, newFilename);
    const sourcePath = path.join(srcDir, file);
    
    fs.copyFileSync(sourcePath, destPath);
    
    // Update the DB entry to strictly map to the new dynamically injected webp/jpg/avif
    db[entryIndex].image = `/images/trainings/${newFilename}`;
    updated++;
  } else {
    console.log(`Unmatched image file (no exact or alias DB match): ${file}`);
  }
}

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
console.log(`Successfully mapped ${updated} new custom client images.`);
