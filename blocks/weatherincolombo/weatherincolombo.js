// console.log('weather block');
export default function decorate() {
  // console.log('weather block call');
  const unitWrapper = document.querySelector('.weatherincolombo > div > div:nth-child(2)');

  if (unitWrapper) {
    // Create select element
    const select = document.createElement('select');
    select.classList.add('weather-unit-dropdown');

    // Create options
    const celsiusOption = document.createElement('option');
    celsiusOption.value = 'celsius';
    celsiusOption.textContent = 'Celsius';

    const fahrenheitOption = document.createElement('option');
    fahrenheitOption.value = 'fahrenheit';
    fahrenheitOption.textContent = 'Fahrenheit';

    // Append options to select
    select.appendChild(celsiusOption);
    select.appendChild(fahrenheitOption);

    // Append select to the target div
    unitWrapper.appendChild(select);
  }
}
