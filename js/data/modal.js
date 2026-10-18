export function cartModal(){
const openCartBtn = document.getElementById('open-cart');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartOverlay = document.getElementById('cart-overlay');


  openCartBtn.addEventListener('click', () => {
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}) 

  closeCartBtn.addEventListener('click', () => {
    cartOverlay.classList.remove('active');
    document.body.style.overflow = ''; 
  });


  cartOverlay.addEventListener('click', (event) => {
    if (event.target === cartOverlay) {
      cartOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  })
  }
