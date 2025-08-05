import {
  buildBlock,
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

const geoPromise = (async () => {
  // Replace with your actual geo service endpoint
  // const resp = await fetch('https://geo.example.com/lookup');
  // return resp.json();
})();

const experimentationConfig = {
  prodHost: 'https://hdfc-poc-dev--internal-doc-poc-en--tekno-point.aem.live',
  audiences: {
    mobile: () => window.innerWidth < 600,
    desktop: () => window.innerWidth >= 600,
    us: async () => (await geoPromise).region === 'us',
    eu: async () => (await geoPromise).region === 'eu',
    // define your custom audiences here as needed
  }
};

let runExperimentation;
let showExperimentationOverlay;
const isExperimentationEnabled = document.head.querySelector('[name^="experiment"],[name^="campaign-"],[name^="audience-"],[property^="campaign:"],[property^="audience:"]')
  || [...document.querySelectorAll('.section-metadata div')].some((d) => d.textContent.match(/Experiment|Campaign|Audience/i));
if (isExperimentationEnabled) {
  ({
    loadEager: runExperimentation,
    loadLazy: showExperimentationOverlay,
  } = await import('../plugins/experimentation/src/index.js'));
}


const AUDIENCES = {
  mobile: () => window.innerWidth < 600,
  desktop: () => window.innerWidth >= 600,
  // define your custom audiences here as needed
};



export const endpoint = 'https://poonawalafin--internal-aem-eds-poc-en--tekno-point.aem.live'

function wrapImgsInLinks(container) {
  const pictures = container.querySelectorAll("picture");
  pictures.forEach((pic) => {
    const link = pic.parentElement.nextElementSibling;
    if (link?.classList.contains("button-container")) {
      link.querySelector("a").innerHTML = "";
      link.querySelector("a").append(pic);
      // pic.replaceWith(link);
    }
  });
}
export function autolinkForm(element) {
  element.querySelectorAll('a').forEach(async function (origin) {
    console.log(origin.href);
      if (origin && origin.href && origin.href.includes('email-form')) {
        decorateForm(origin.closest('ul'))
      }
    });
}
/**
 * Builds hero block and prepends to main in a new section.
 * @param {Element} main The container element
 */
function buildHeroBlock(main) {
  const h1 = main.querySelector('h1');
  const picture = main.querySelector('picture');
  // eslint-disable-next-line no-bitwise
  if (h1 && picture && (h1.compareDocumentPosition(picture) & Node.DOCUMENT_POSITION_PRECEDING)) {
    const section = document.createElement('div');
    section.append(buildBlock('hero', { elems: [picture, h1] }));
    main.prepend(section);
  }
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

/**
 * Builds all synthetic blocks in a container element.
 * @param {Element} main The container element
 */
function buildAutoBlocks(main) {
  try {
    buildHeroBlock(main);
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
    wrapImgsInLinks(main);
}

/**
 * Loads everything needed to get to LCP.
 * @param {Element} doc The container element
 */
async function loadEager(doc) {
  document.documentElement.lang = 'en';
  decorateTemplateAndTheme();
  if (runExperimentation) {
    await runExperimentation(document, experimentationConfig);
  }
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
  const main = doc.querySelector('main');
  await loadSections(main);

  const { hash } = window.location;
  const element = hash ? doc.getElementById(hash.substring(1)) : false;
  if (hash && element) element.scrollIntoView();

  loadHeader(doc.querySelector('header'));
  loadFooter(doc.querySelector('footer'));

  loadCSS(`${window.hlx.codeBasePath}/styles/lazy-styles.css`);
  loadFonts();
  if (showExperimentationOverlay) {
    await showExperimentationOverlay(document, experimentationConfig);
  }
}

function appendNextElements(container, nextElement) {
  container.append(nextElement);
}
export default function decorateWrapper(main) {
  // debugger;
  main.querySelectorAll('.wrapper').forEach((block) => {
    // wrapper.classList.remove('wrapper');
    console.log('Decorating wrapper', block);

    const blockWrapper = block;
    let nextElement = blockWrapper.nextElementSibling;
    while (nextElement && (!nextElement.classList.contains('wrapper'))) {
      appendNextElements(block, nextElement);
      nextElement = blockWrapper.nextElementSibling;
    }
  });
  // block.innerHTML = '';
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
    decorateWrapper(document.querySelector('main'));
}

loadPage();

document.addEventListener("DOMContentLoaded", () => {
  const scrollMap = {
    "whatisDaycare": "whatisDaycare",
    "NeedforDaycareBusinessIndia": "NeedforDaycareBusinessIndia",
    "StepsStartDaycarBusinessedit": "StepsStartDaycarBusinessedit",
    "StepstoApplyBusinessLoan": "StepstoApplyBusinessLoan",
    "AbouttheAuthor": "toConclude",
    "FrequentlyAskedQuestions": "FrequentlyAskedQuestions"
  };
  console.log(scrollMap);
  
  document.querySelectorAll('.section[data-id="tableofcontent"] li a').forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = new URL(link.href).hash.replace('#','');
      const targetId = scrollMap[id];
      const target = document.querySelector(`.section[data-id="${targetId}"]`);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
