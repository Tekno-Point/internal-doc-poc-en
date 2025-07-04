/* eslint-disable */
const dummyData = [
  // {
  //   from: 'Mumbai (BOM)',
  //   to: 'Colombo (CMB)',
  //   fare: 'Round-trip / Economy',
  //   dates: '08/30/2025 - 09/04/2025',
  //   price: 'INR 20,186*',
  //   seen: 'Seen: 54 minutes ago',
  // },
  // {
  //   from: 'Mumbai (BOM)',
  //   to: 'Colombo (CMB)',
  //   fare: 'Round-trip / Economy',
  //   dates: '08/13/2025 - 08/23/2025',
  //   price: 'INR 20,186*',
  //   seen: 'Seen: 2 hrs ago',
  // },
  // {
  //   from: 'Mumbai (BOM)',
  //   to: 'Colombo (CMB)',
  //   fare: 'Round-trip / Economy',
  //   dates: '08/06/2025 - 08/11/2025',
  //   price: 'INR 20,186*',
  //   seen: 'Seen: 4 hrs ago',
  // },
  // {
  //   from: 'Mumbai (BOM)',
  //   to: 'Colombo (CMB)',
  //   fare: 'Round-trip / Economy',
  //   dates: '08/11/2025 - 08/19/2025',
  //   price: 'INR 20,186*',
  //   seen: 'Seen: 3 hrs ago',
  // },
  // {
  //   from: 'Mumbai (BOM)',
  //   to: 'Colombo (CMB)',
  //   fare: 'Round-trip / Economy',
  //   dates: '08/11/2025 - 08/20/2025',
  //   price: 'INR 20,186*',
  //   seen: 'Seen: 6 hrs ago',
  // },
  {
    "header": {
        "status": "SUCCESS",
        "requestId": "REQ-1751544521783"
    },
    "body": {
        "meta": {
            "count": 1,
            "links": {
                "self": "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=BOM&destinationLocationCode=CMB&departureDate=2025-07-16&returnDate=2025-07-30&adults=1&includedAirlineCodes=TG&max=5"
            }
        },
        "data": [
            {
                "type": "flight-offer",
                "id": "1",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2025-07-16",
                "lastTicketingDateTime": "2025-07-16",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT24H20M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "BOM",
                                    "terminal": "2",
                                    "at": "2025-07-16T23:35:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2025-07-17T05:35:00"
                                },
                                "carrierCode": "TG",
                                "number": "318",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "TG"
                                },
                                "duration": "PT4H30M",
                                "id": "1",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2025-07-17T21:40:00"
                                },
                                "arrival": {
                                    "iataCode": "CMB",
                                    "at": "2025-07-17T23:55:00"
                                },
                                "carrierCode": "TG",
                                "number": "307",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "TG"
                                },
                                "duration": "PT3H45M",
                                "id": "2",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    },
                    {
                        "duration": "PT21H",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "CMB",
                                    "at": "2025-07-30T00:55:00"
                                },
                                "arrival": {
                                    "iataCode": "BKK",
                                    "at": "2025-07-30T06:10:00"
                                },
                                "carrierCode": "TG",
                                "number": "308",
                                "aircraft": {
                                    "code": "320"
                                },
                                "operating": {
                                    "carrierCode": "TG"
                                },
                                "duration": "PT3H45M",
                                "id": "3",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            },
                            {
                                "departure": {
                                    "iataCode": "BKK",
                                    "at": "2025-07-30T18:55:00"
                                },
                                "arrival": {
                                    "iataCode": "BOM",
                                    "terminal": "2",
                                    "at": "2025-07-30T21:55:00"
                                },
                                "carrierCode": "TG",
                                "number": "317",
                                "aircraft": {
                                    "code": "333"
                                },
                                "operating": {
                                    "carrierCode": "TG"
                                },
                                "duration": "PT4H30M",
                                "id": "4",
                                "numberOfStops": 0,
                                "blacklistedInEU": false
                            }
                        ]
                    }
                ],
                "price": {
                    "currency": "EUR",
                    "total": "980.89",
                    "base": "546.00",
                    "fees": [
                        {
                            "amount": "0.00",
                            "type": "SUPPLIER"
                        },
                        {
                            "amount": "0.00",
                            "type": "TICKETING"
                        }
                    ],
                    "grandTotal": "980.89"
                },
                "pricingOptions": {
                    "fareType": [
                        "PUBLISHED"
                    ],
                    "includedCheckedBagsOnly": true
                },
                "validatingAirlineCodes": [
                    "TG"
                ],
                "travelerPricings": [
                    {
                        "travelerId": "1",
                        "fareOption": "STANDARD",
                        "travelerType": "ADULT",
                        "price": {
                            "currency": "EUR",
                            "total": "980.89",
                            "base": "546.00"
                        },
                        "fareDetailsBySegment": [
                            {
                                "segmentId": "1",
                                "cabin": "PREMIUM_ECONOMY",
                                "fareBasis": "VLRSTU1",
                                "brandedFare": "ECOST",
                                "brandedFareLabel": "ECOSTANDARD",
                                "class": "U",
                                "includedCheckedBags": {
                                    "weight": 35,
                                    "weightUnit": "KG"
                                },
                                "includedCabinBags": {
                                    "weight": 7,
                                    "weightUnit": "KG"
                                },
                                "amenities": [
                                    {
                                        "description": "EXTRA BAGGAGE PER ONE KILOGRAM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "HOT MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "NAME CORRECTION",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BASIC SEAT",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "REFUND",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGEABLE TICKET",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "2",
                                "cabin": "ECONOMY",
                                "fareBasis": "VLRSTU1",
                                "brandedFare": "ECOST",
                                "brandedFareLabel": "ECOSTANDARD",
                                "class": "V",
                                "includedCheckedBags": {
                                    "weight": 35,
                                    "weightUnit": "KG"
                                },
                                "includedCabinBags": {
                                    "weight": 7,
                                    "weightUnit": "KG"
                                },
                                "amenities": [
                                    {
                                        "description": "EXTRA BAGGAGE PER ONE KILOGRAM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "HOT MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "NAME CORRECTION",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BASIC SEAT",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "REFUND",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGEABLE TICKET",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "3",
                                "cabin": "ECONOMY",
                                "fareBasis": "VLRSTU1",
                                "brandedFare": "ECOST",
                                "brandedFareLabel": "ECOSTANDARD",
                                "class": "V",
                                "includedCheckedBags": {
                                    "weight": 35,
                                    "weightUnit": "KG"
                                },
                                "includedCabinBags": {
                                    "weight": 7,
                                    "weightUnit": "KG"
                                },
                                "amenities": [
                                    {
                                        "description": "EXTRA BAGGAGE PER ONE KILOGRAM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "HOT MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "NAME CORRECTION",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BASIC SEAT",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "REFUND",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGEABLE TICKET",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            },
                            {
                                "segmentId": "4",
                                "cabin": "PREMIUM_ECONOMY",
                                "fareBasis": "VLRSTU1",
                                "brandedFare": "ECOST",
                                "brandedFareLabel": "ECOSTANDARD",
                                "class": "U",
                                "includedCheckedBags": {
                                    "weight": 35,
                                    "weightUnit": "KG"
                                },
                                "includedCabinBags": {
                                    "weight": 7,
                                    "weightUnit": "KG"
                                },
                                "amenities": [
                                    {
                                        "description": "EXTRA BAGGAGE PER ONE KILOGRAM",
                                        "isChargeable": true,
                                        "amenityType": "BAGGAGE",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "PRE RESERVED SEAT ASSIGNMENT",
                                        "isChargeable": true,
                                        "amenityType": "PRE_RESERVED_SEAT",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "HOT MEAL",
                                        "isChargeable": false,
                                        "amenityType": "MEAL",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "NAME CORRECTION",
                                        "isChargeable": true,
                                        "amenityType": "TRAVEL_SERVICES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "BASIC SEAT",
                                        "isChargeable": false,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "REFUND",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    },
                                    {
                                        "description": "CHANGEABLE TICKET",
                                        "isChargeable": true,
                                        "amenityType": "BRANDED_FARES",
                                        "amenityProvider": {
                                            "name": "BrandedFare"
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "dictionaries": {
            "locations": {
                "BOM": {
                    "cityCode": "BOM",
                    "countryCode": "IN"
                },
                "BKK": {
                    "cityCode": "BKK",
                    "countryCode": "TH"
                },
                "CMB": {
                    "cityCode": "CMB",
                    "countryCode": "LK"
                }
            },
            "aircraft": {
                "320": "AIRBUS A320",
                "333": "AIRBUS A330-300"
            },
            "currencies": {
                "EUR": "EURO"
            },
            "carriers": {
                "TG": "THAI AIRWAYS INTERNATIONAL"
            }
        }
    },
    "errorBody": {}
}
];
async function getAccessToken() {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    header: {
      authToken: '',
    },
    body: {
      clientId: 'ZJRz6bDFxfRPaABeZOShvesqoatIx0AS',
      clientSecret: 'UNXbe2JgHEJ5BFsp',
      grantType: 'client_credentials',
    },
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  let value = '';
  try {
    const response = await fetch('https://shaft.eastus2.cloudapp.azure.com/shaft/api/eds-channel/grant-access/v1', requestOptions);
    if (response.ok) {
      const json = await response.json();
      value = json.body.access_token;
    }
  } catch (error) {
    console.warn(error);
  } finally {
    return value;
  }
}
async function getData(auth, data) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('authorization', `Bearer ${auth}`);

  const raw = JSON.stringify({
    header: {},
    body: {
      originLocationCode: 'SYD',
      destinationLocationCode: 'BKK',
      departureDate: '2025-07-16',
      returnDate: '2025-07-30',
      adults: '2',
      includedAirlineCodes: 'TG',
      max: '5',
    },
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  let value = dummyData;
  try {
    const response = await fetch('https://shaft.eastus2.cloudapp.azure.com/shaft/api/eds-channel/flight-offers-search/v1', requestOptions);
    if (response.ok) {
      value = await response.json();
    }
  } catch (error) {
    console.warn(error); // 
  } finally {
    return value;
  }
}

export default async function decorate(block) {
  const auth = await getAccessToken();
  const flights = await getData(auth);
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

  const tbody = block.querySelector('#ticket-rows');

  // flights.forEach(({
  //   from, to, fare, dates, price, seen,
  // }) => {
  //   const row = document.createElement('tr');
  //   row.innerHTML = `
  //     <td>${from}</td>
  //     <td>${to}</td>
  //     <td>${fare}</td>
  //     <td>${dates}</td>
  //     <td>
  //       <div class="price-cell">
  //         <strong>${price}</strong><br/>
  //         <small>${seen}</small>
  //       </div>
  //     </td>
  //   `;
  //   tbody.appendChild(row);
  // });
   flights.forEach((flight) => {
    debugger
    const itineraries = flight.body.data;
    const from = flight.body.data[0].itineraries[0].segments[0].departure.iataCode;
    const to = flight.body.data[0].itineraries[0].segments[1].arrival.iataCode;

    const departureDate = flight.body.data[0].lastTicketingDate ;
    const returnDate = flight.body.data[0].lastTicketingDateTime;
    const dates = departureDate && returnDate ? `${departureDate} - ${returnDate}` : '—';

    const fare = flight.travelerPricings?.[0]?.fareOption || 'Economy';
    const price = flight.price?.grandTotal ? `€${flight.price.grandTotal}` : '—';

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${from}</td>
      <td>${to}</td>
      <td>${fare}</td>
      <td>${dates}</td>
      <td>
        <div class="price-cell">
          <strong>${price}</strong><br/>
          <small>Just now</small>
        </div>
      </td>
      <td><a href="#book" class="book-now-button">Book now</a></td>
    `;
    tbody.appendChild(row);
   });

  //   if (window.innerWidth < 768) {
  const rows = document.querySelectorAll('.plane-table tbody tr');

  rows.forEach((row) => {
    const td = document.createElement('td');
    td.innerHTML = '<a href="#book" class="book-now-button">Book now</a>';
    td.style.paddingTop = '8px';
    row.appendChild(td);
  });
  // }
}
