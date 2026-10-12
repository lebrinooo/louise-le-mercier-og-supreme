const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'content.js'), 'utf8'), context);

const projects = context.window.PORTFOLIO_PROJECTS;
if (!projects || typeof projects !== 'object') throw new Error('PORTFOLIO_PROJECTS est introuvable.');

const entries = Object.entries(projects);
if (entries.length < 1) throw new Error('Le portfolio doit contenir au moins un projet.');

const categories = new Set(['publicite', 'fiction', 'documentaire']);
const required = ['cardTitle', 'cardMeta', 'title', 'kicker', 'category', 'image', 'alt', 'meta', 'story', 'link'];

for (const [id, project] of entries) {
  for (const field of required) {
    if (!(field in project)) throw new Error(`${id}: champ obligatoire manquant: ${field}`);
  }
  if (!categories.has(project.category)) throw new Error(`${id}: catégorie invalide: ${project.category}`);
  if (!Array.isArray(project.meta) || project.meta.length < 2) throw new Error(`${id}: les crédits sont incomplets.`);
  if (!Array.isArray(project.story) || project.story.length < 2) throw new Error(`${id}: la présentation est incomplète.`);
  if (project.image.startsWith('/assets/')) {
    const asset = path.join(root, project.image.slice(1));
    if (!fs.existsSync(asset)) throw new Error(`${id}: image introuvable: ${project.image}`);
  }
}

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
for (const marker of ['data-project-grid', 'data-dialog', 'mailto:louiselemercier@icloud.com', 'linkedin.com/in/louise-le-mercier-0a3bb4206']) {
  if (!html.includes(marker)) throw new Error(`Élément essentiel absent de index.html: ${marker}`);
}

console.log(`OK: ${entries.length} projets, médias locaux, contact et structure vérifiés.`);
