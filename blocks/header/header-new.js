export default function selectTag(div) {
  div.querySelector('.nav-brand .select-wrapper ').addEventListener('click', () => {
    const ulElement = div.querySelector('.nav-brand .select-wrapper ul');
    // Toggle the display style between 'none' and 'block'
    if (ulElement.style.display === 'block') {
      ulElement.style.display = 'none'; // Close it
    } else {
      ulElement.style.display = 'block'; // Open it
    }
  });
}
