/* eslint-disable */
export default function decorate(block) {
  const container = document.createElement('div');
  container.className = 'month-graph';

  const today = new Date();
  const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  for (let i = 0; i < 30; i++) {
    const day = new Date();
    day.setDate(today.getDate() + i);

    const dayNum = String(day.getDate()).padStart(2, '0');
    const dayName = day.toLocaleDateString('en-US', { weekday: 'short' });
    const month = monthNames[day.getMonth()];

    const bar = document.createElement('div');
    bar.className = 'graph-bar';

    // Simulate bar height and price
    const price = 20000 + Math.floor(Math.random() * 500);
    const height = Math.floor(Math.random() * 80) + 20;

    // Add tooltip HTML
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = `
      <strong>BOM - CMB</strong><br>
      ${formatDate(day)} - ${formatDateOffset(day, 14)}<br>
      From INR ${price.toLocaleString()}*
    `;

    bar.innerHTML = `
      <div class="bar"></div>
      <div class="day-num">${dayNum}</div>
      <div class="day-name">${dayName}</div>
      ${i === 0 || day.getDate() === 1 ? `<div class="month-label">${month}</div>` : ''}
    `;

    bar.appendChild(tooltip);
    container.appendChild(bar);
  }

  block.innerHTML = '';
  block.appendChild(container);
}

// Helper functions for tooltip dates
function formatDate(date) {
  const d = new Date(date);
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  const yyyy = d.getFullYear();
  return `${mm}/${dd}/${yyyy}`;
}

function formatDateOffset(date, offset) {
  const d = new Date(date);
  d.setDate(d.getDate() + offset);
  return formatDate(d);
}
