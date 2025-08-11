// Function to calculate the score based on audit results
function calculateSeoScore(audit) {
  const weights = {
    'Title': 15,
    'Meta Description': 15,
    'H1 Count': 10,
    'Canonical URL': 10,
    'Open Graph Title': 10,
    'Images without Alt Text': 10,
    'Viewport Meta Tag': 5,
    'Language Attribute': 5,
    'Twitter Card': 5,
    'Schema Blocks': 5,
    'Favicon': 5,
  };

  let score = 0;
  const maxScore = Object.values(weights).reduce((sum, weight) => sum + weight, 0);

  // Add points for each successful check
  if (audit['Title'] && audit['Title'] !== '❌ Missing') score += weights['Title'];
  if (audit['Meta Description'] && audit['Meta Description'] !== '❌ Missing') score += weights['Meta Description'];
  if (audit['H1 Count'] === 1) score += weights['H1 Count']; // Ideal H1 count is 1
  if (audit['Canonical URL'] && audit['Canonical URL'] !== '❌ Missing') score += weights['Canonical URL'];
  if (audit['Open Graph Title'] && audit['Open Graph Title'] !== '❌ Missing') score += weights['Open Graph Title'];
  if (audit['Images without Alt Text'] === 0) score += weights['Images without Alt Text'];
  if (audit['Viewport Meta Tag'] === '✅ Present') score += weights['Viewport Meta Tag'];
  if (audit['Language Attribute'] && audit['Language Attribute'] !== '❌ Missing') score += weights['Language Attribute'];
  if (audit['Twitter Card'] && audit['Twitter Card'] !== '❌ Missing') score += weights['Twitter Card'];
  if (audit['Schema Blocks'] > 0) score += weights['Schema Blocks'];
  if (audit['Favicon'] === '✅ Present') score += weights['Favicon'];

  return { score, maxScore };
}

// Updated audit function to include the score
function runSeoAudit() {
  const audit = {
    'Title': document.title,
    'Meta Description': document.querySelector('meta[name="description"]')?.content || '❌ Missing',
    'H1 Count': document.querySelectorAll('h1').length,
    'Viewport Meta Tag': document.querySelector('meta[name="viewport"]') ? '✅ Present' : '❌ Missing',
    'Language Attribute': document.documentElement.lang || '❌ Missing',
    'Canonical URL': document.querySelector('link[rel="canonical"]')?.href || '❌ Missing',
    'Images without Alt Text': Array.from(document.images).filter((img) => !img.alt).length,
    'Schema Blocks': document.querySelectorAll('script[type="application/ld+json"]').length,
    'Open Graph Title': document.querySelector('meta[property="og:title"]')?.content || '❌ Missing',
    'Twitter Card': document.querySelector('meta[name="twitter:card"]')?.content || '❌ Missing',
    'Favicon': document.querySelector('link[rel*="icon"]') ? '✅ Present' : '❌ Missing',
  };
  const score = calculateSeoScore(audit);
  return { audit, score }; // Return both audit details and the score
}

// Updated panel function to display the score
async function showSeoPanel({ audit, score }) {
  const { createElement } = await import(`${window.hlx.codeBasePath}/scripts/scripts.js`);
  
  const scorePercentage = Math.round((score.score / score.maxScore) * 100);

  const panel = createElement('div', { id: 'seo-checker-panel' });
  const header = createElement('div', { class: 'seo-checker-header' });
  const title = createElement('h2', { class: 'seo-checker-title' }, 'SEO Audit');
  const scoreDisplay = createElement('div', { class: 'seo-score' }, `Score: ${scorePercentage}%`);
  const closeButton = createElement('button', { class: 'seo-checker-close' }, '×');

  closeButton.onclick = () => {
    document.body.classList.remove('seo-panel-active');
    panel.remove();
  };

  header.append(title, scoreDisplay, closeButton);

  // Progress Bar
  const progressBarContainer = createElement('div', { class: 'seo-progress-bar-container' });
  const progressBar = createElement('div', { class: 'seo-progress-bar' });
  progressBar.style.width = `${scorePercentage}%`;
  progressBarContainer.append(progressBar);

  const content = createElement('div', { class: 'seo-checker-content' });
  for (const [key, value] of Object.entries(audit)) {
    const item = createElement('div', { class: 'seo-item' });
    const itemKey = createElement('span', { class: 'seo-key' }, `${key}:`);
    const itemValue = createElement('span', { class: 'seo-value' }, value);
    item.append(itemKey, itemValue);
    content.append(item);
  }

  panel.append(header, progressBarContainer, content);
  document.body.append(panel);
  // Use a timeout to allow the element to be added to the DOM before adding the class for animation
  setTimeout(() => document.body.classList.add('seo-panel-active'), 10);
}

// Updated init function to handle the new return object and body class
export default async function init() {
  // We need to import this function to use it
  const { loadCSS } = await import(`${window.hlx.codeBasePath}/scripts/aem.js`);
  // Add this line to load the stylesheet
  await loadCSS(`${window.hlx.codeBasePath}/tools/sidekick/plugins/seo-checker/seo-checker.css`);

  const existingPanel = document.getElementById('seo-checker-panel');
  if (existingPanel) {
    document.body.classList.remove('seo-panel-active');
    existingPanel.remove();
    return;
  }

  const results = runSeoAudit();
  await showSeoPanel(results);
}