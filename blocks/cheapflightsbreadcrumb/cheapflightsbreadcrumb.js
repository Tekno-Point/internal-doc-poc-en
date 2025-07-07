export default function decorate() {
  // Target the last <div> with two empty divs
  const inputWrapper = document.querySelector('.dailycheap-header > div:nth-child(3)');
  const [fromContainer, toContainer] = inputWrapper.children;

  // Create FROM input
  const fromInput = document.createElement('input');
  fromInput.type = 'text';
  fromInput.placeholder = 'Mumbai - India (BOM)';
  fromInput.value = 'Mumbai - India (BOM)'
  fromInput.className = 'input-field';

  // Create TO input
  const toInput = document.createElement('input');
  toInput.type = 'text';
  toInput.placeholder = 'Colombo - Sri Lanka (CMB)';
  toInput.value = 'Colombo - Sri Lanka (CMB)'
  toInput.className = 'input-field';

  // Append inputs to the corresponding containers
  fromContainer.appendChild(fromInput);
  toContainer.appendChild(toInput);


  // Create compare icon container
  const compareIcon = document.createElement('div');
  compareIcon.className = 'compare-icon';

  // Add image inside the icon
  const iconImage = document.createElement('img');
  iconImage.src = '../../icons/compare-arrow.png'; // <-- Replace with actual path
  iconImage.alt = 'Compare';
  iconImage.className = 'compare-img';

  // Append image to the icon div
  compareIcon.appendChild(iconImage);

  // Insert icon between inputs
  inputWrapper.insertBefore(compareIcon, toContainer);
}
