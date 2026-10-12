const projects = window.PORTFOLIO_PROJECTS;
const order = Object.keys(projects);

function renderProjectGrid() {
  const grid = document.querySelector('[data-project-grid]');
  grid.innerHTML = order.map((id, index) => {
    const project = projects[id];
    const layoutClass = project.layout ? ` ${project.layout}` : '';
    const loading = index === 0 ? 'eager' : 'lazy';
    const number = String(index + 1).padStart(2, '0');
    return `<article class="project${layoutClass}" data-category="${project.category}" data-project="${id}">
      <button class="project-open" type="button" aria-label="Voir le projet ${project.cardTitle}">
        <div class="project-visual"><img src="${project.image}" alt="${project.alt}" loading="${loading}"></div>
        <div class="project-info"><div><span class="project-no">${number}</span><h3>${project.cardTitle}</h3></div><p>${project.cardMeta}</p></div>
      </button>
    </article>`;
  }).join('');
}

renderProjectGrid();

const dialog = document.querySelector('[data-dialog]');
const title = document.querySelector('[data-dialog-title]');
const kicker = document.querySelector('[data-dialog-kicker]');
const media = document.querySelector('[data-dialog-media]');
const meta = document.querySelector('[data-dialog-meta]');
const story = document.querySelector('[data-dialog-story]');
const externalLink = document.querySelector('[data-dialog-link]');
let currentProject = order[0];

function renderProject(id, updateHash = true) {
  const project = projects[id];
  if (!project) return;
  currentProject = id;
  title.textContent = project.title;
  kicker.textContent = project.kicker;
  media.innerHTML = project.video
    ? `<video controls playsinline poster="${project.image}"><source src="${project.video}" type="video/mp4"></video>`
    : `<img src="${project.image}" alt="${project.alt}">`;
  meta.innerHTML = project.meta.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join('');
  story.innerHTML = project.story.map(text => `<p>${text}</p>`).join('');
  externalLink.hidden = !project.link;
  if (project.link) externalLink.href = project.link;
  if (updateHash) history.replaceState(null, '', `#projet-${id}`);
}

function openProject(id) {
  renderProject(id);
  dialog.showModal();
  document.body.classList.add('dialog-open');
}

function closeProject() {
  dialog.close();
  document.body.classList.remove('dialog-open');
  history.replaceState(null, '', '#projets');
  media.innerHTML = '';
}

document.querySelectorAll('[data-project]').forEach(card => {
  card.querySelector('button').addEventListener('click', () => openProject(card.dataset.project));
});
document.querySelector('[data-close]').addEventListener('click', closeProject);
dialog.addEventListener('click', event => { if (event.target === dialog) closeProject(); });
dialog.addEventListener('cancel', event => { event.preventDefault(); closeProject(); });
document.querySelector('[data-next]').addEventListener('click', () => {
  const next = order[(order.indexOf(currentProject) + 1) % order.length];
  renderProject(next);
  dialog.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => item.classList.remove('is-active'));
    button.classList.add('is-active');
    const filter = button.dataset.filter;
    document.querySelectorAll('.project').forEach(project => {
      project.classList.toggle('is-filtered', filter !== 'all' && project.dataset.category !== filter);
    });
  });
});

let lastScroll = 0;
const nav = document.querySelector('[data-nav]');
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  nav.classList.toggle('is-hidden', current > lastScroll && current > 120);
  lastScroll = current;
}, { passive: true });

const initialProject = location.hash.match(/^#projet-(.+)$/)?.[1];
if (initialProject && projects[initialProject]) openProject(initialProject);
