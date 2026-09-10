const cart = [];
const cartLabel = document.querySelector('#cart-label');
const cartTotal = document.querySelector('#cart-total');
document.querySelectorAll('[data-scroll]').forEach(button => button.addEventListener('click', () => document.querySelector(button.dataset.scroll).scrollIntoView({ behavior: 'smooth' })));
document.querySelectorAll('.add').forEach(button => button.addEventListener('click', () => {
  cart.push({ name: button.dataset.item, price: Number(button.dataset.price) });
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartLabel.textContent = `${cart.length} item${cart.length > 1 ? 's' : ''} in your order`;
  cartTotal.textContent = `₹${total}`;
  document.querySelector('#cart').classList.add('visible');
  button.innerHTML = 'Added <span>✓</span>';
  setTimeout(() => button.innerHTML = 'Add <span>+</span>', 1200);
}));
document.querySelector('#directions').addEventListener('click', () => window.open('https://maps.google.com/?q=Indiranagar+Bengaluru', '_blank'));
