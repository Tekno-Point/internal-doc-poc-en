/* eslint-disable */
const dummyData = {
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
                                "cabin": "ECONOMY",
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
            },
            {
                "type": "flight-offer",
                "id": "2",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2025-08-02",
                "lastTicketingDateTime": "2025-08-16",
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
                    "grandTotal": "520.89"
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
                                "cabin": "ECONOMY",
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
            },
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
                                "cabin": "ECONOMY",
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
            },
            {
                "type": "flight-offer",
                "id": "1",
                "source": "GDS",
                "instantTicketingRequired": false,
                "nonHomogeneous": false,
                "oneWay": false,
                "isUpsellOffer": false,
                "lastTicketingDate": "2025-07-20",
                "lastTicketingDateTime": "2025-07-26",
                "numberOfBookableSeats": 9,
                "itineraries": [
                    {
                        "duration": "PT24H20M",
                        "segments": [
                            {
                                "departure": {
                                    "iataCode": "CMB",
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
                                    "iataCode": "BOM",
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
                    "grandTotal": "751.89"
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
};

function getIATACode(location) {
const match = location.match(/\(([^)]+)\)/);
const code = match ? match[1] : null;
console.log(code); // Output: "BOM"
return code;
}
function getDate(num) {
  const date = new Date();
date.setDate(date.getDate() + num);
// Pad month and day with leading zero if needed
return date.toISOString().split('T')[0]; // "2025-07-16"


}
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

async function getData(auth, data = {
      originLocationCode:  "BOM",
      destinationLocationCode:  "CMB",
      departureDate: '2025-07-16',
      returnDate: '2025-07-30',
      adults: '1',
      includedAirlineCodes: 'TG',
      max: '10',
}) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('authorization', `Bearer ${auth}`);

  const raw = JSON.stringify({
    header: {},
    body: {...data },
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
function convertEurToInr(eurAmount, rate = 90) {
    const inr = eurAmount * rate;
    return `₹${Math.round(inr).toLocaleString('en-IN', { maximumFractionDigits: 2 })}`;
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
    <input type="text" id="from" list="from-options" placeholder="Mumbai - India (BOM)" />
    
    <ul id="from-options">
        <li>Mumbai - India (BOM)</li>
        <li>Delhi - India (DEL)</li>
        <li>Bangalore - India (BLR)</li>
        <li>Chennai - India (MAA)</li>
    </ul>
  </div>
      <div class="to">
    <label for="to">To</label>
    <input type="text" id="to" list="to-options" placeholder="Colombo - Sri Lanka (CMB)" />
    
    <ul id="to-options">
        <li>Mumbai - India (BOM)</li>
        <li>Delhi - India (DEL)</li>
        <li>Bangalore - India (BLR)</li>
        <li>Chennai - India (MAA)</li>
    </ul>
  </div>
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

//   trial for search input starts
    const fromInput = document.getElementById('from');
  const fromList = document.getElementById('from-options');

  const toInput = document.getElementById('to');
  const toList = document.getElementById('to-options');

  setupSearchDropdown(fromInput, fromList);
  setupSearchDropdown(toInput, toList);
//   trial for search input ends


  function renderList(flights) {
    const tbody = block.querySelector('#ticket-rows');
    tbody.innerHTML = ''
   flights.body.data.forEach((flight,index) => {
    const from = flight.itineraries[0].segments[0].departure.iataCode;
    const to = flight.itineraries[0].segments[1].arrival.iataCode;

    const departureDate = flight.lastTicketingDate ;
    const returnDate = flight.lastTicketingDateTime;
    const dates = departureDate && returnDate ? `${departureDate} - ${returnDate}` : '—';

    const fare = flight.travelerPricings[0].fareDetailsBySegment[1].cabin;
    
    const inrPrice = convertEurToInr(flight.price.grandTotal);
    console.log(inrPrice);
    const price = inrPrice;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${from}</td>
      <td>${to}</td>
      <td>${fare}</td>
      <td>${dates}</td>
      <td>
        <div class="price-cell">
          <strong>${price}</strong><br/>
        </div>
      </td>
      <td><a href="#book" class="book-now-button">Book now</a></td>
    `;
    tbody.appendChild(row);
   });
    
  }

  renderList(flights);
  const fromAirports = [
  "Mumbai - India (BOM)",
  "Delhi - India (DEL)",
  "Chennai - India (MAA)",
  "Hyderabad - India (HYD)",
];

const toAirports = [
  "Colombo - Sri Lanka (CMB)",
  "Bangkok - Thailand (BKK)",
  "Dubai - UAE (DXB)",
  "Singapore (SIN)",
];

// function populateDatalist(id, options) {
//   const datalist = document.getElementById(id);
//   datalist.innerHTML = "";
//   options.forEach((val) => {
//     const opt = document.createElement("option");
//     opt.value = val;
//     datalist.appendChild(opt);
//   });
// }

// populateDatalist("from-options", fromAirports);
// populateDatalist("to-options", toAirports);
//   const fromInput = block.querySelector('#from')
//   const toInput = block.querySelector('#to')
//   fromInput.addEventListener('focusout', inputHandler);
//   toInput.addEventListener('focusout', inputHandler);
//   async function inputHandler() {
//     const from = fromInput.value.trim();
//     const to = toInput.value.trim();
//     if(from && to){
//       const auth = await getAccessToken()
//       const data = await getData(auth , {
//       originLocationCode:  getIATACode(from),
//       destinationLocationCode:  getIATACode(to),
//       departureDate: getDate(3),
//       returnDate: getDate(7),
//       adults: '1',
//       includedAirlineCodes: 'TG',
//       max: '10',
// })

// renderList(data);


//     }
//   }
}

function setupSearchDropdown(input, list) {
  const options = Array.from(list.querySelectorAll('li'));

  // Basic dropdown styling
  list.style.display = 'none';
  list.style.position = 'absolute';
  list.style.zIndex = '999';
  list.style.background = '#fff';
  list.style.border = '1px solid #ddd';
  list.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
  list.style.width = input.offsetWidth + 'px';
  list.style.maxHeight = '250px';
  list.style.overflowY = 'auto';
  list.style.borderRadius = '8px';
  list.style.marginTop = '8px';
  list.style.padding = '0';

  // Filter logic
  input.addEventListener('input', () => {
    const value = input.value.toLowerCase();
    let hasMatch = false;

    options.forEach((li) => {
      if (li.textContent.toLowerCase().includes(value)) {
        li.style.display = 'block';
        hasMatch = true;
      } else {
        li.style.display = 'none';
      }
    });

    list.style.display = hasMatch ? 'block' : 'none';
  });

  input.addEventListener('focus', () => {
    options.forEach((li) => (li.style.display = 'block'));
    list.style.display = 'block';
  });

  input.addEventListener('blur', () => {
    setTimeout(() => {
      list.style.display = 'none';
    }, 200);
  });

  options.forEach((li) => {
    li.style.padding = '12px 16px';
    li.style.cursor = 'pointer';
    li.style.fontSize = '15px';
    li.style.borderBottom = '1px solid #eee';

    li.addEventListener('mouseover', () => {
      li.style.backgroundColor = '#f5f5f5';
    });
    li.addEventListener('mouseout', () => {
      li.style.backgroundColor = '#fff';
    });

    li.addEventListener('click', () => {
      input.value = li.textContent;
      list.style.display = 'none';
    });
  });
}
