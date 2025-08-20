import {
  loadHeader,
  loadFooter,
  decorateButtons,
  decorateIcons,
  decorateSections,
  decorateBlocks,
  decorateTemplateAndTheme,
  waitForFirstImage,
  loadSection,
  loadSections,
  loadCSS,
} from './aem.js';

// eslint-disable-next-line import/no-cycle
import initAccessibilityMode from '../tools/sidekick/plugins/accessibility-mode/accessibility-mode.js';
import initSeoChecker from '../tools/sidekick/plugins/seo-checker/seo-checker.js';

const geoPromise = (async () => {
  // Replace with your actual geo service endpoint
  // const resp = await fetch('https://geo.example.com/lookup');
  // return resp.json();
})();

const experimentationConfig = {
  prodHost: 'www.my-site.com',
  audiences: {
    mobile: () => window.innerWidth < 600,
    desktop: () => window.innerWidth >= 600,
    us: async () => (await geoPromise).region === 'us',
    eu: async () => (await geoPromise).region === 'eu',
    // define your custom audiences here as needed
  },
};

let runExperimentation;
let showExperimentationOverlay;
const isExperimentationEnabled = document.head.querySelector('[name^="experiment"],[name^="campaign-"],[name^="audience-"],[property^="campaign:"],[property^="audience:"]')
  || [...document.querySelectorAll('.section-metadata div')].some((d) => d.textContent.match(/Experiment|Campaign|Audience/i));
if (isExperimentationEnabled) {
  ({
    loadEager: runExperimentation,
    loadLazy: showExperimentationOverlay,
    // eslint-disable-next-line import/no-unresolved
  } = await import('@adobe/aem-experimentation/src/index.js'));
}

// eslint-disable-next-line no-unused-vars
const AUDIENCES = {
  mobile: () => window.innerWidth < 600,
  desktop: () => window.innerWidth >= 600,
  // define your custom audiences here as needed
};

/**
 * Gets all the metadata elements that are in the given scope.
 * @param {String} scope The scope/prefix for the metadata
 * @returns an array of HTMLElement nodes that match the given scope
 */

let isA11yModeActive = false;

export function getAllMetadata(scope) {
  return [...document.head.querySelectorAll(`meta[property^="${scope}:"],meta[name^="${scope}-"]`)]
    .reduce((res, meta) => {
      // eslint-disable-next-line no-undef
      const id = toClassName(meta.name
        ? meta.name.substring(scope.length + 1)
        : meta.getAttribute('property').split(':')[1]);
      res[id] = meta.getAttribute('content');
      return res;
    }, {});
}

/**
 * Create an element with the given tag and properties.
 * @param {string} tagName The tag name for the element.
 * @param {object} [props] The properties to apply.
 * @param {string|Element|Element[]} [html] The content to add.
 * @returns {HTMLElement} The created element.
 */
/**
 * Create an element with the given tag and properties.
 * @param {string} tagName The tag name for the element.
 * @param {object} [props] The properties to apply.
 * @param {string|Element|Element[]} [html] The content to add.
 * @returns {HTMLElement} The created element.
 */
export function createElement(tagName, props, html) {
  const elem = document.createElement(tagName);
  if (props) {
    Object.keys(props).forEach((propName) => {
      const val = props[propName];
      if (propName === 'class') {
        const classesArr = (typeof val === 'string') ? val.split(' ') : val;
        classesArr.forEach(function (cls) {
          cls && elem.classList.add(cls);
        })
      } else {
        elem.setAttribute(propName, val);
      }
    });
  }

  if (html) {
    const appendEl = (el) => {
      if (el instanceof HTMLElement || el instanceof SVGElement) {
        elem.append(el);
      } else {
        elem.insertAdjacentHTML('beforeend', el);
      }
    };

    if (Array.isArray(html)) {
      html.forEach(appendEl);
    } else {
      appendEl(html);
    }
  }

  return elem;
}
/**
 * Moves all the attributes from a given elmenet to another given element.
 * @param {Element} from the element to copy attributes from
 * @param {Element} to the element to copy attributes to
 */
export function moveAttributes(from, to, attributes) {
  if (!attributes) {
    // eslint-disable-next-line no-param-reassign
    attributes = [...from.attributes].map(({ nodeName }) => nodeName);
  }
  attributes.forEach((attr) => {
    const value = from.getAttribute(attr);
    if (value) {
      to.setAttribute(attr, value);
      from.removeAttribute(attr);
    }
  });
}

const accessibilityMode = async (e) => {
  const pluginButton = e.target.shadowRoot.querySelector('plugin-action-bar')
    ? e.target.shadowRoot.querySelector('plugin-action-bar').shadowRoot.querySelector('.accessibility-mode')
    : e.target.shadowRoot.querySelector('.accessibility-mode > button');

  isA11yModeActive = !isA11yModeActive;

  if (isA11yModeActive) {
    pluginButton.style.backgroundColor = '#4e9a17';
    pluginButton.style.color = '#fff';
  } else {
    pluginButton.removeAttribute('style');
  }

  document.querySelector('body').classList.toggle('accessibility-mode-active');
  await initAccessibilityMode(isA11yModeActive);
};

const sk = document.querySelector('aem-sidekick') || document.querySelector('helix-sidekick');

if (sk) {
  sk.addEventListener('custom:accessibility-mode', accessibilityMode);
  sk.addEventListener('custom:seo-checker', initSeoChecker);
} else {
  document.addEventListener('sidekick-ready', () => {
    // eslint-disable-next-line no-shadow
    const sk = document.querySelector('aem-sidekick') || document.querySelector('helix-sidekick');
    sk.addEventListener('custom:accessibility-mode', accessibilityMode);
    sk.addEventListener('custom:seo-checker', initSeoChecker);
  }, {
    once: true,
  });
}

/**
 * Move instrumentation attributes from a given element to another given element.
 * @param {Element} from the element to copy attributes from
 * @param {Element} to the element to copy attributes to
 */
export function moveInstrumentation(from, to) {
  moveAttributes(
    from,
    to,
    [...from.attributes]
      .map(({ nodeName }) => nodeName)
      .filter((attr) => attr.startsWith('data-aue-') || attr.startsWith('data-richtext-')),
  );
}

/**
 * load fonts.css and set a session storage flag
 */
async function loadFonts() {
  await loadCSS(`${window.hlx.codeBasePath}/styles/fonts.css`);
  try {
    if (!window.location.hostname.includes('localhost')) sessionStorage.setItem('fonts-loaded', 'true');
  } catch (e) {
    // do nothing
  }
}

function autolinkModals(element) {
  element.addEventListener('click', async (e) => {
    const origin = e.target.closest('a');

    if (origin && origin.href && origin.href.includes('/modals/')) {
      e.preventDefault();
      const { openModal } = await import(`${window.hlx.codeBasePath}/blocks/modal/modal.js`);
      openModal(origin.href);
    }
  });
}

export async function loadFragment(path) {
  // if (path && path.startsWith('/')) {
  if (path) {
    // eslint-disable-next-line no-param-reassign
    path = path.replace(/(\.plain)?\.html/, '');
    const resp = await fetch(`${path}.plain.html`);
    if (resp.ok) {
      const main = document.createElement('main');
      main.innerHTML = await resp.text();

      // reset base path for media to fragment base
      const resetAttributeBase = (tag, attr) => {
        main.querySelectorAll(`${tag}[${attr}^="./media_"]`).forEach((elem) => {
          elem[attr] = new URL(elem.getAttribute(attr), new URL(path, window.location)).href;
        });
      };
      resetAttributeBase('img', 'src');
      resetAttributeBase('source', 'srcset');
      // eslint-disable-next-line
      decorateMain(main);
      await loadSections(main);
      return main;
    }
  }
  return null;
}

function autolinkFragements(element) {
  element.querySelectorAll('a').forEach((origin) => {
    if (origin && origin.href && origin.href.includes('/fragment/')) {
      const parent = origin.parentElement;
      const div = document.createElement('div');
      div.append(origin);
      parent.append(div);
      loadFragment(div);
    }
  });
}

// eslint-disable-next-line consistent-return
export default async function decorateFragment(block) {
  const link = block.querySelector('a');
  const path = link ? link.getAttribute('href') : block.textContent.trim();
  const fragment = await loadFragment(path);
  if (fragment && block.closest('.nav-sections')) {
    const fragmentSec = fragment.querySelectorAll('.section');
    block.replaceChildren(...fragmentSec);
    block.classList.remove('section');
    return 1;
  }
  if (fragment) {
    const fragmentSection = fragment.querySelector(':scope .section');
    if (fragmentSection) {
      block.classList.add(...fragmentSection.classList);
      block.classList.remove('section');
      block.replaceChildren(...fragmentSection.childNodes);
    }
  }
}

export function loadAutoBlock(doc) {
  doc.querySelectorAll('a').forEach((a) => {
    if (a && a.href && a.href.includes('/fragment/')) {
      decorateFragment(a.parentElement);
    }
  });
}

/**
 * Builds all synthetic blocks in a container element.
 * @param {Element} main The container element
 */
function buildAutoBlocks(main) {
  try {
    loadAutoBlock(main);
    // TODO: add auto block, if needed
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Auto Blocking failed', error);
  }
}

/**
 * Decorates the main element.
 * @param {Element} main The main element
 */
// eslint-disable-next-line import/prefer-default-export
export function decorateMain(main) {
  // hopefully forward compatible button decoration
  decorateButtons(main);
  decorateIcons(main);
  buildAutoBlocks(main);
  decorateSections(main);
  decorateBlocks(main);
}

/**
 * Loads everything needed to get to LCP.
 * @param {Element} doc The container element
 */
async function loadEager(doc) {
  document.documentElement.lang = 'en';
  // Add below snippet early in the eager phase
  if (runExperimentation) {
    await runExperimentation(document, experimentationConfig);
  }
  decorateTemplateAndTheme();
  const main = doc.querySelector('main');
  if (main) {
    decorateMain(main);
    document.body.classList.add('appear');
    await loadSection(main.querySelector('.section'), waitForFirstImage);
  }

  try {
    /* if desktop (proxy for fast connection) or fonts already loaded, load fonts.css */
    if (window.innerWidth >= 900 || sessionStorage.getItem('fonts-loaded')) {
      loadFonts();
    }
  } catch (e) {
    // do nothing
  }
}

/**
 * Loads everything that doesn't need to be delayed.
 * @param {Element} doc The container element
 */
async function loadLazy(doc) {
  autolinkModals(doc);
  autolinkFragements(doc);
  const main = doc.querySelector('main');
  await loadSections(main);
  autolinkFragements(doc);
  const { hash } = window.location;
  const element = hash ? doc.getElementById(hash.substring(1)) : false;
  if (hash && element) element.scrollIntoView();

  loadHeader(doc.querySelector('header'));
  loadFooter(doc.querySelector('footer'));

  loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
  loadFonts();

  // Add below snippet at the end of the lazy phase
  if (showExperimentationOverlay) {
    await showExperimentationOverlay(document, experimentationConfig);
  }

  loadAutoBlock(doc);
}
/**
 * Loads everything that happens a lot later,
 * without impacting the user experience.
 */
function loadDelayed() {
  // eslint-disable-next-line import/no-cycle
  window.setTimeout(() => import('./delayed.js'), 3000);
  // load anything that can be postponed to the latest here
}

async function loadPage() {
  await loadEager(document);
  await loadLazy(document);
  loadDelayed();
}
 const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

  let node;
  while ((node = walker.nextNode())) {
    if (node.nodeValue.includes("[ Email Address ]")) {
      // Create input element
      const input = document.createElement("input");
      input.type = "email";
      input.placeholder = "Enter your email";
      input.className = "footer-input"; // optional class for styling

      // Replace text node with input
      node.parentNode.replaceChild(input, node);
    }
  }
loadPage();
