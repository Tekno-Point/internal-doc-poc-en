function runSeoAudit() {
  const audit = {
    Title: document.title,
    'Meta Description': document.querySelector('meta[name="description"]')?.content || '❌ Missing',
    'H1 Count': document.querySelectorAll('h1').length,
    'Viewport Meta Tag': document.querySelector('meta[name="viewport"]') ? '✅ Present' : '❌ Missing',
    'Language Attribute': document.documentElement.lang || '❌ Missing',
    'Canonical URL': document.querySelector('link[rel="canonical"]')?.href || '❌ Missing',
    'Images without Alt Text': Array.from(document.images).filter((img) => !img.alt).length,
    'Schema Blocks': document.querySelectorAll('script[type="application/ld+json"]').length,
    'Open Graph Title': document.querySelector('meta[property="og:title"]')?.content || '❌ Missing',
    'Twitter Card': document.querySelector('meta[name="twitter:card"]')?.content || '❌ Missing',
    Favicon: document.querySelector('link[rel*="icon"]') ? '✅ Present' : '❌ Missing',
  };
  return audit;
}

// The function is now async to allow for the dynamic import
async function showSeoPanel(auditResults) {
  // We import the function we need right here.
  const { createElement } = await import(`${window.hlx.codeBasePath}/scripts/scripts.js`);

  const panel = createElement('div', { id: 'seo-checker-panel', class: 'seo-checker' });
  const header = createElement('div', { class: 'seo-checker-header' });
  const title = createElement('h2', { class: 'seo-checker-title' }, 'SEO Audit Results');
  const closeButton = createElement('button', { class: 'seo-checker-close' }, '×');

  closeButton.onclick = () => panel.remove();
  header.append(title, closeButton);

  const content = createElement('div', { class: 'seo-checker-content' });
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(auditResults)) {
    const item = createElement('div', { class: 'seo-item' });
    const itemKey = createElement('span', { class: 'seo-key' }, `${key}:`);
    const itemValue = createElement('span', { class: 'seo-value' }, value);
    item.append(itemKey, itemValue);
    content.append(item);
  }

  panel.append(header, content);
  document.body.append(panel);
}

// The init function is also now async
export default async function init() {
  const existingPanel = document.getElementById('seo-checker-panel');
  if (existingPanel) {
    existingPanel.remove();
    return;
  }
  const auditResults = runSeoAudit();
  // We await the panel creation since it's now an async function
  await showSeoPanel(auditResults);
}
