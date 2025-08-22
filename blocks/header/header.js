import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../../scripts/scripts.js';

// media query match that indicates mobile/tablet width
const isDesktop = window.matchMedia('(min-width: 900px)');

/* function closeOnEscape(e) {
  if (e.code === 'Escape') {
    const nav = document.getElementById('nav');
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleAllNavSections(navSections);
      navSectionExpanded.focus();
    } else if (!isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleMenu(nav, navSections);
      nav.querySelector('button').focus();
    }
  }
}

function closeOnFocusLost(e) {
  const nav = e.currentTarget;
  if (!nav.contains(e.relatedTarget)) {
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleAllNavSections(navSections, false);
    } else if (!isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleMenu(nav, navSections, false);
    }
  }
}

function openOnKeydown(e) {
  const focused = document.activeElement;
  const isNavDrop = focused.className === 'nav-drop';
  if (isNavDrop && (e.code === 'Enter' || e.code === 'Space')) {
    const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
    // eslint-disable-next-line no-use-before-define
    toggleAllNavSections(focused.closest('.nav-sections'));
    focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
  }
}

function focusNavSection() {
  document.activeElement.addEventListener('keydown', openOnKeydown);
} */

/**
 * Toggles all nav sections
 * @param {Element} sections The container element
 * @param {Boolean} expanded Whether the element should be expanded or collapsed
 */
function toggleAllNavSections(sections, expanded = false) {
  sections.querySelectorAll('.nav-sections .default-content-wrapper > ul > li, .nav-tools .default-content-wrapper > ul > li').forEach((section) => {
    section.setAttribute('aria-expanded', expanded);
    // section?.querySelector("ul")?.classList.add("inner-ul");
    section?.querySelectorAll(':scope>ul >li')?.forEach((subLi, ind) => {
      if (isDesktop.matches) {
        (subLi.setAttribute('aria-expanded', ind === 0 ? 'true' : expanded));
      } else {
        subLi.setAttribute('aria-expanded', expanded);
      }
    });
    if (isDesktop.matches) {
      const firstLiWithoutU = section.querySelector('.inner-ul > li:not(:has(strong u))');
      if (firstLiWithoutU) {
        firstLiWithoutU.setAttribute('aria-expanded', 'true');
      }
    }
  });
}

// function toggleAllNavTools(sections, expanded = false) {
// eslint-disable-next-line max-len
//   sections.querySelectorAll('.nav-tools .default-content-wrapper > ul > li').forEach((section) => {
//     section.setAttribute('aria-expanded', expanded);
//   });
// }

// function toggleAllNavSubSections(sections, expanded = false) {
//   sections.querySelectorAll('.nav-sections .default-content-wrapper > ul > li >')?
//  .forEach((section, ind) => {
//     section.setAttribute('aria-expanded', ind == 0 ? 'true' : expanded);
//   });
// }

/**
 * Toggles the entire nav
 * @param {Element} nav The container element
 * @param {Element} navSections The nav sections within the container element
 * @param {*} forceExpanded Optional param to force nav expand behavior when not null
 */
function toggleMenu(nav, navSections, forceExpanded = null) {
  const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
  const button = nav.querySelector('.nav-hamburger button');
  document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
  nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  // toggleAllNavSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
  toggleAllNavSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
  // toggleAllNavTools(navTools);
  // toggleAllNavSubSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
  button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  // enable nav dropdown keyboard accessibility
  const navDrops = navSections.querySelectorAll('.nav-drop');
  if (isDesktop.matches) {
    navDrops.forEach((drop) => {
      if (!drop.hasAttribute('tabindex')) {
        drop.setAttribute('tabindex', 0);
        // drop.addEventListener('focus', focusNavSection);
      }
    });
  } else {
    navDrops.forEach((drop) => {
      drop.removeAttribute('tabindex');
      // drop.removeEventListener('focus', focusNavSection);
    });
  }
}

/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // load nav as fragment
  const navMeta = getMetadata('nav');
  let navPath;
  if (isDesktop.matches) {
    navPath = navMeta ? new URL(navMeta, window.location).pathname : '/ifb/nav';
  } else {
    navPath = getMetadata('mob-nav') || '/ifb/nav';
  }

  const fragment = await loadFragment(navPath);

  // decorate nav DOM
  block.textContent = '';
  const nav = document.createElement('nav');
  nav.id = 'nav';
  while (fragment.firstElementChild) nav.append(fragment.firstElementChild);

  const classes = ['upper-section', 'brand', 'sections', 'tools'];
  classes.forEach((c, i) => {
    const section = nav.children[i];
    if (section) section.classList.add(`nav-${c}`);
  });

  const navBrand = nav.querySelector('.nav-brand');
  const brandLink = navBrand.querySelector('.button');
  if (brandLink) {
    brandLink.className = '';
    brandLink.closest('.button-container').className = '';
  }

  const navSections = nav.querySelector('.nav-sections');
  // const navSectionsImg = nav.querySelector('.section.highlight');
  // if (navSectionsImg) {
  //   const imgDefaultCon = navSectionsImg.querySelector('.default-content-wrapper');
  //   navSections?.querySelectorAll('.default-content-wrapper > ul > li >ul').forEach(((section) => {
  //     section.querySelectorAll('li').forEach((li) => {
  //       const imgClone = imgDefaultCon.cloneNode(true);
  //       li.appendChild(imgClone);
  //     });
  //     // subLiSection.appendChild(imgDefasultCon);
  //   }));
  // }
  // navSectionsImg?.remove();

  const isClick = isDesktop.matches ? 'mouseover' : 'click';
  if (navSections) {
    navSections.querySelectorAll('.default-content-wrapper > ul > li, .nav-tools .default-content-wrapper > ul > li').forEach((section) => {
      section?.querySelector('ul')?.classList.add('inner-ul');
    });

    navSections.querySelectorAll(':scope >.default-content-wrapper > ul > li').forEach((navSection) => {
      // const firstLiWithoutU = navSection.querySelectorAll('.inner-ul > li:not(:has(strong u))');
      // if (firstLiWithoutU.length > 0) {
      //   firstLiWithoutU.forEach((li) => {
      //     li.setAttribute('aria-expanded', 'true');
      //   });
      // }
      // if (firstLiWithoutU) {
      //   firstLiWithoutU.setAttribute('aria-expanded', 'true');
      // }
      if (navSection.querySelector('ul')) navSection.classList.add('nav-drop');
      if (isDesktop.matches) {
        navSection.addEventListener('mouseenter', (e) => {
          if (!e.target.closest('.inner-ul')) {
            navSection.setAttribute('aria-expanded', 'true');
          }
        });
        navSection.addEventListener('mouseleave', (e) => {
          if (!e.target.closest('.inner-ul')) {
            navSection.setAttribute('aria-expanded', 'false');
          }
        });
      } else {
        navSection.addEventListener('click', (e) => {
          if (!e.target.closest('.inner-ul')) {
            const expanded = navSection.getAttribute('aria-expanded') === 'true';
            toggleAllNavSections(navSections);
            navSection.setAttribute('aria-expanded', expanded ? 'false' : 'true');
          }
        });
      }

      navSection.querySelectorAll(':scope>ul.inner-ul>li').forEach((subLi) => {
        // subLi?.querySelector(":scope>p, :scope>a")?.addEventListener(isClick, (ele) => {
        // subLi?.querySelector(":scope>li")?.addEventListener(isClick, (ele) => {
        if (subLi.querySelector(':scope >strong >u')) return;
        subLi.querySelector('strong')?.addEventListener(isClick, (e) => {
          e.stopImmediatePropagation();
          e.stopPropagation();
          const expanded = subLi?.getAttribute('aria-expanded');
          if (expanded === 'false') {
            // eslint-disable-next-line max-len
            // navSections.querySelectorAll('.default-content-wrapper > ul > li').forEach((section) => {
            // section.querySelectorAll(':scope>ul >li').forEach((li) => {
            // subLi.closest('ul.inner-ul').querySelectorAll(':scope>ul >li').forEach((li) => {
            subLi.closest('ul.inner-ul').querySelectorAll(':scope>li').forEach((li) => {
              li.setAttribute('aria-expanded', 'false');
              // });
            });
            subLi.setAttribute('aria-expanded', 'true');
          } else if (!isDesktop.matches) {
            navSections.querySelectorAll('.default-content-wrapper > ul > li').forEach((section) => {
              section.querySelectorAll('ul >li').forEach((li) => {
                li.setAttribute('aria-expanded', 'false');
              });
            });
            subLi.setAttribute('aria-expanded', 'false');
          }
        });
      });
    });
  }

  // const navTools = nav.querySelector('.nav-tools');
  // if (navTools) {
  //   toggleAllNavTools(navTools);
  //   navTools.querySelectorAll(':scope .default-content-wrapper > ul > li').forEach((navTool) => {
  //     if (navTool.querySelector('ul')) navTool.classList.add('nav-drop');

  //     // if (isDesktop.matches) {
  //     //   navTool.addEventListener('mouseenter', () => {
  //     //     navTool.setAttribute('aria-expanded', 'true');
  //     //   });
  //     //   navTool.addEventListener('mouseleave', () => {
  //     //     navTool.setAttribute('aria-expanded', 'false');
  //     //   });
  //     // } else {
  //     //   navTool.addEventListener('click', () => {
  //     //     const expanded = navTool.getAttribute('aria-expanded') === 'true';
  //     //     toggleAllNavTools(navTools);
  //     //     navTool.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  //     //   });
  //     // }
  //   });
  // }

  // hamburger for mobile
  const hamburger = document.createElement('div');
  hamburger.classList.add('nav-hamburger');
  hamburger.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
      <span class="nav-hamburger-icon"></span>
    </button>`;
  hamburger.addEventListener('click', () => {
    toggleMenu(nav, navSections);
    toggleAllNavSections(navSections, 'false');
  });
  nav.prepend(hamburger);
  nav.setAttribute('aria-expanded', 'false');
  toggleMenu(nav, navSections, isDesktop.matches);
  isDesktop.addEventListener('change', () => toggleMenu(nav, navSections, isDesktop.matches));

  const navWrapper = document.createElement('div');
  navWrapper.className = 'nav-wrapper';
  navWrapper.append(nav);
  block.append(navWrapper);
}

let lastScrollY = window.scrollY;
const threshold = 10;
const header = document.querySelector('header.header-wrapper');
const blogPost = document.querySelector('.section.head-image');
const footerSection = document.querySelector('footer.footer-wrapper');
const footerSecPosY = (footerSection.getBoundingClientRect()).y;
const blogPostHieght = (blogPost.getBoundingClientRect()).height;
// blogPost.getBoundingClientRect(scrollY);
window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const diff = currentScrollY - lastScrollY;

  if (Math.abs(diff) > threshold && blogPostHieght / 2 < currentScrollY) {
    if (diff > 0) {
      // scrolling down
      header.classList.add('header-down');
      header.classList.remove('header-up');
    } else {
      // scrolling up
      header.classList.add('header-up');
      header.classList.remove('header-down');
    }
    lastScrollY = currentScrollY;
  }

  if (currentScrollY > footerSecPosY) {
    header.classList.remove('header-down');
  }
});
