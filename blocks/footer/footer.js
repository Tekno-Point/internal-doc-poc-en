import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const footerMeta = getMetadata('footer');
  const footerPath = footerMeta ? new URL(footerMeta, window.location).pathname : '/footer';
  const fragment = await loadFragment(footerPath);

  // decorate footer DOM
  block.textContent = '';
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);
  document.querySelectorAll("li").forEach(li => {
  if (li.textContent.includes("[pincode]")) {
    const input = document.createElement("input");
    input.type = "pincode";
    input.placeholder = "Pincode";
    input.style.width = "100%"; 
    li.textContent = "";
    li.appendChild(input);
  }
});
document.querySelectorAll("li").forEach(li => {
  if (li.textContent.includes("[Email Address]")) {
    const input = document.createElement("input");
    input.type = "email";
    input.placeholder = "Add your email address here";
    input.style.width = "100%"; 
    li.textContent = "";
    li.appendChild(input);
  }
});

document.querySelectorAll("td p").forEach(p => {
  p.addEventListener("click", function () {
    const parentTd = this.closest("td");

    // if clicked td is already active → remove it
    if (parentTd.classList.contains("active")) {
      parentTd.classList.remove("active");
    } else {
      // remove active from all td
      document.querySelectorAll("td").forEach(td => td.classList.remove("active"));
      // add active to clicked td
      parentTd.classList.add("active");
    }
  });
});
}
