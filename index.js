const TAX_RATE = 0.2;

function calculateSubtotal(items) {
  if (!Array.isArray(items)) throw new Error("Items must be an array.");
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

function applyDiscount(subtotal, discountCode) {
  const codes = { SPRING10: 0.1, VIP20: 0.2, BLACKFRIDAY: 0.3 };
  const discount = codes[discountCode] || 0;
  return subtotal - subtotal * discount;
}

function calculateTax(totalWithoutTax, customRate) {
  const rate = typeof customRate === "number" ? customRate : TAX_RATE;
  return totalWithoutTax * rate;
}

function generateOrderSummary(customer, items, discountCode) {
  if (!customer || !customer.name) throw new Error("Invalid customer.");
  const subtotal = calculateSubtotal(items);
  const discounted = applyDiscount(subtotal, discountCode);
  const tax = calculateTax(discounted);
  const total = discounted + tax;
  return {
    customer: customer.name,
    itemsCount: items.length,
    subtotal,
    discounted,
    tax,
    total,
    discountApplied: discountCode || "NONE",
    date: new Date().toISOString(),
  };
}

function sendOrderConfirmation(order) {
  if (!order || !order.customer) throw new Error("Order is invalid.");
  const message = `Commande confirmée pour ${order.customer} — Total : ${order.total.toFixed(2)} €`;
  console.log(message);
  return message;
}

// Exemple d’utilisation
const customer = { name: "Kenan", email: "kenan.dufrene@neeft.fr" };
const items = [
  { name: "Casque Audio", price: 99.99, quantity: 1 },
  { name: "Clavier Mécanique", price: 89.5, quantity: 2 },
];
const order = generateOrderSummary(customer, items, "VIP20");
sendOrderConfirmation(order);
