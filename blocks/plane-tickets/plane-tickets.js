export default function decorate(block) {
  block.innerHTML = `
    <div class="plane-header">
      <h2>Plane Tickets from Mumbai to Colombo on SriLankan Airlines</h2>
    </div>
    <div class="plane-filters">
      <div class="from">
        <label for="from">From</label>
        <input type="text" id="from" placeholder="Mumbai - India (BOM)" />
      </div>
      <div class="to">
        <label for="to">To</label>
        <input type="text" id="to" placeholder="Colombo - Sri Lanka (CMB)" />
      </div>
    </div>
    <div class="plane-table">
      <table>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Fare Type</th>
            <th>Dates</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody id="ticket-rows">
        </tbody>
      </table>
    </div>
    <p class="fare-note">
      *Fares displayed have been collected within the last 48hrs and may no longer be available at time of booking.
    </p>
  `;

  // Sample Data
  const flights = [
    { from: "Mumbai (BOM)", to: "Colombo (CMB)", fare: "Round-trip / Economy", dates: "08/30/2025 - 09/04/2025", price: "INR 20,186*", seen: "Seen: 54 minutes ago" },
    { from: "Mumbai (BOM)", to: "Colombo (CMB)", fare: "Round-trip / Economy", dates: "08/13/2025 - 08/23/2025", price: "INR 20,186*", seen: "Seen: 2 hrs ago" },
    { from: "Mumbai (BOM)", to: "Colombo (CMB)", fare: "Round-trip / Economy", dates: "08/06/2025 - 08/11/2025", price: "INR 20,186*", seen: "Seen: 4 hrs ago" },
    { from: "Mumbai (BOM)", to: "Colombo (CMB)", fare: "Round-trip / Economy", dates: "08/11/2025 - 08/19/2025", price: "INR 20,186*", seen: "Seen: 3 hrs ago" },
    { from: "Mumbai (BOM)", to: "Colombo (CMB)", fare: "Round-trip / Economy", dates: "08/11/2025 - 08/20/2025", price: "INR 20,186*", seen: "Seen: 6 hrs ago" },
  ];

  const tbody = block.querySelector('#ticket-rows');

  flights.forEach(({ from, to, fare, dates, price, seen }) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${from}</td>
      <td>${to}</td>
      <td>${fare}</td>
      <td>${dates}</td>
      <td>
        <div class="price-cell">
          <strong>${price}</strong><br/>
          <small>${seen}</small>
        </div>
      </td>
    `;
    tbody.appendChild(row);
  });

//   if (window.innerWidth < 768) {
  const rows = document.querySelectorAll('.plane-table tbody tr');

  rows.forEach(row => {
    const td = document.createElement('td');
    td.innerHTML = `<a href="#book" class="book-now-button">Book now</a>`;
    td.style.paddingTop = '8px';
    row.appendChild(td);
  });
// }
}
