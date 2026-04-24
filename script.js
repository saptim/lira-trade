// === Загрузка товаров ===
async function loadProducts() {
  try {
    const response = await fetch('products.json');
    const products = await response.json();
    const container = document.getElementById('products-list');
    container.innerHTML = '';

    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'product-card';
      card.innerHTML = `
        <div class="product-image" style="background-image: url('${product.image || 'https://via.placeholder.com/300x200?text=Фото'}')"></div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error('Ошибка загрузки товаров:', err);
    document.getElementById('products-list').innerHTML = '<p>Пока нет товаров.</p>';
  }
}

if (document.getElementById('products-list')) {
  loadProducts();
}

// === Управление бургер-меню ===
function toggleMenu() {
  const nav = document.getElementById('mainNav');
  const burger = document.querySelector('.burger');
  if (nav && burger) {
    nav.classList.toggle('show');
    burger.classList.toggle('active');
  }
}

// Закрыть меню при клике на ссылку
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    const nav = document.getElementById('mainNav');
    const burger = document.querySelector('.burger');
    if (nav) nav.classList.remove('show');
    if (burger) burger.classList.remove('active');
  });
});