/*
 * Janet Coker Hubs — price menu
 * ---------------------------------------------------------------
 * To change a price, edit the number next to the service name.
 * Item format: { name, price, from?, unit? }
 *   from: true  -> shows "from" before the price (starting price)
 *   unit: "nail" -> shows "/ nail" after the price
 */
window.MENU = [
  {
    id: "braids",
    nav: "Braids",
    title: "Braids",
    groups: [
      {
        name: "Knotless",
        items: [
          { name: "Large Knotless", price: 35000 },
          { name: "Medium Knotless", price: 45000 },
          { name: "Small Knotless", price: 60000 },
          { name: "Boho Knotless", price: 50000 }
        ]
      },
      {
        name: "Box & classic braids",
        items: [
          { name: "Large Box Braids", price: 30000 },
          { name: "Medium Box Braids", price: 40000 },
          { name: "Small Box Braids", price: 55000 }
        ]
      },
      {
        name: "Signature braids",
        items: [
          { name: "Stitch Braids", price: 30000 },
          { name: "Feed-In Braids", price: 35000 },
          { name: "Fulani Braids", price: 45000 },
          { name: "Tribal Braids", price: 50000 },
          { name: "Ghana Weaving", price: 30000 },
          { name: "Children’s Braids", price: 15000, from: true }
        ]
      }
    ],
    note: "Prices are starting prices and may vary by length, size, hair volume and design. Hair extensions are charged separately where applicable."
  },
  {
    id: "wigs",
    nav: "Wigs",
    title: "Wig services",
    groups: [
      {
        items: [
          { name: "Closure Installation", price: 30000 },
          { name: "Frontal Installation", price: 40000 },
          { name: "Glueless Installation", price: 30000 },
          { name: "Wig Installation + Styling", price: 35000 },
          { name: "Wig Revamp", price: 25000 },
          { name: "Wig Wash & Restyle", price: 15000 },
          { name: "Wig Takedown", price: 7000 }
        ]
      }
    ],
    note: "Every installation includes professional preparation and styling for the selected service. Complex styling, colouring or extra hair treatment may cost more."
  },
  {
    id: "nails",
    nav: "Nails",
    title: "Nail studio",
    groups: [
      {
        name: "Gel",
        items: [
          { name: "Gel Polish", price: 10000 },
          { name: "Gel Extensions", price: 18000 },
          { name: "Gel-X", price: 20000 },
          { name: "French Tips", price: 15000 },
          { name: "Chrome Finish", price: 15000 }
        ]
      },
      {
        name: "Acrylic",
        items: [
          { name: "Short", price: 18000 },
          { name: "Medium", price: 22000 },
          { name: "Long", price: 28000 },
          { name: "Extra Long", price: 35000 }
        ]
      },
      {
        name: "Nail art",
        items: [
          { name: "Simple Design", price: 1000, unit: "nail" },
          { name: "Chrome", price: 1000, unit: "nail" },
          { name: "Stones / 3D Design", price: 1500, unit: "nail", from: true }
        ]
      }
    ],
    note: "Final pricing depends on length, shape, design and additional details."
  },
  {
    id: "lashes",
    nav: "Lashes",
    title: "Lashes",
    groups: [
      {
        items: [
          { name: "Classic", price: 18000 },
          { name: "Hybrid", price: 23000 },
          { name: "Volume", price: 28000 },
          { name: "Wispy", price: 30000 },
          { name: "Mega Volume", price: 35000 },
          { name: "Lash Refill", price: 10000, from: true },
          { name: "Lash Removal", price: 5000 }
        ]
      }
    ]
  },
  {
    id: "relaxation",
    nav: "Relaxation",
    title: "The Relaxation Lounge",
    subtitle: "Take a moment. Reset. Relax.",
    featured: true,
    groups: [
      {
        items: [
          { name: "Relaxation Session · 15 mins", price: 25000 },
          { name: "Relaxation Session · 30 mins", price: 40000 },
          { name: "Relaxation Session · 45 mins", price: 55000 },
          { name: "Relaxation Session · 1 hour", price: 70000 }
        ]
      }
    ],
    callout: { text: "Add a 15-minute relaxation session to any beauty service for", price: 4000 }
  }
];

window.POLICY = [
  { title: "Appointments", text: "Recommended to secure your preferred time." },
  { title: "Late arrivals", text: "Please tell us if you are running late. Extended delays may affect your appointment." },
  { title: "Deposits", text: "A booking deposit may be required to confirm appointments." },
  { title: "Pricing", text: "Listed prices are starting prices and may vary by length, size, design, hair volume and additional products or services." },
  { title: "Hair", text: "Where applicable, arrive with clean, product-free hair." },
  { title: "Cancellations", text: "Please tell us in advance if you need to reschedule or cancel." }
];
