import { createElement } from "../../../../scripts/scripts.js";

function runSeoAudit() {
    const audit = {
        title: document.title,
        metaDescription: document.querySelector('meta[name="description"]')?.content || 'Missing',
        h1Count: document.querySelectorAll('h1').length,
        viewportMeta: !!document.querySelector('meta[name="viewport"]'),
        langAttribute: document.documentElement.lang || 'Missing',
        canonical: document.querySelector('link[rel="canonical"]')?.href || 'Missing',
        imagesWithoutAlt: Array.from(document.images).filter(img => !img.alt).length,
        schemaBlocks: document.querySelectorAll('script[type="application/ld+json"]').length,
        openGraph: document.querySelector('meta[property="og:title"]')?.content || 'Missing',
        twitterCard: document.querySelector('meta[name="twitter:card"]')?.content || 'Missing',
        favicon: document.querySelector('link[rel*="icon"]')?.href || 'Missing'
    };
    return audit;
}

function showSeoPanel(auditResults) {
    const panel = createElement('div', { id: 'seo-checker-panel', class: 'seo-checker' });
    const header = createElement('div', { class: 'seo-checker-header' });
    const title = createElement('h2', { class: 'seo-checker-title' }, 'SEO Audit Results');
    const closeButton = createElement('button', { class: 'seo-checker-close' }, '×');

    closeButton.onclick = () => panel.remove;
    header.append(title, closeButton);


    const content = createElement('div', { class: 'seo-checker-content' });
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

export default function init() {
    const existingPanel = document.getElementById('seo-checker-panel');
    if (existingPanel) {
        remove.existingPanel();
        return;
    }
    const auditResults = runSeoAudit();
    showSeoPanel(auditResults);
}