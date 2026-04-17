import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

export function readData(filename) {
  const filePath = path.join(dataDir, filename);
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function writeData(filename, data) {
  const filePath = path.join(dataDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

export function getSiteSettings() {
  return readData('site-settings.json');
}

export function getAboutData() {
  return readData('about.json');
}

export function getTrainings() {
  return readData('trainings.json') || [];
}

export function getAudits() {
  return readData('audits.json') || [];
}

export function getEquipment() {
  return readData('equipment.json') || [];
}

export function getTestimonials() {
  return readData('testimonials.json') || [];
}

export function getGallery() {
  return readData('gallery.json') || [];
}

export function getBlogs() {
  return readData('blogs.json') || [];
}

export function getClients() {
  return readData('clients.json') || [];
}

export function getServices() {
  return readData('services.json') || {};
}

export function getService(slug) {
  const services = getServices();
  return services[slug] || null;
}
