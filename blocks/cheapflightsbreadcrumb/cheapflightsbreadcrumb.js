export default function decorate() {
  // Target the last <div> with two empty divs
  const inputWrapper = document.querySelector('.dailycheap-header > div:nth-child(3)');
  const [fromContainer, toContainer] = inputWrapper.children;

  // Create FROM input
  const fromInput = document.createElement('input');
  fromInput.type = 'text';
  fromInput.placeholder = 'Mumbai - India (BOM)';
  fromInput.className = 'input-field';

  // Create TO input
  const toInput = document.createElement('input');
  toInput.type = 'text';
  toInput.placeholder = 'Colombo - Sri Lanka (CMB)';
  toInput.className = 'input-field';

  // Append inputs to the corresponding containers
  fromContainer.appendChild(fromInput);
  toContainer.appendChild(toInput);
}
