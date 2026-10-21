export const products = [
  // Кросівки
  {
    id: 1,
    name: "Кросівки Vortex Runner",
    category: "Кросівки",
    brand: "URBN",
    price: 2399,
    oldPrice: null,
    icon: "icon-sneaker",
    image: "./img/sneakers/Vortex-Runner-sneakers.webp",
    art: "art-1",
    sizes: ["40", "41", "42", "43", "44"],
    inStock: true,
    description: "Легкі бігові кросівки з рельєфною підошвою — тримають зчеплення на будь-якому асфальті."
  },
  {
    id: 2,
    name: "Кросівки Midnight Court",
    category: "Кросівки",
    brand: "URBN",
    price: 1899,
    oldPrice: 2299,
    icon: "icon-sneaker",
    image: "./img/sneakers/Midnight-Court-sneakers.webp",
    art: "art-2",
    sizes: ["40", "41", "42", "43", "44"],
    inStock: true,
    description: "Класичні баскетбольні кросівки у темному виконанні для щоденного міського носіння."
  },
  {
    id: 3,
    name: "Кросівки Lime Pulse",
    category: "Кросівки",
    brand: "URBN",
    price: 2199,
    oldPrice: null,
    icon: "icon-sneaker",
    image: "./img/sneakers/Lime-Pulse-sneakers.webp",
    art: "art-3",
    sizes: ["40", "41", "42", "43", "44"],
    inStock: false,
    description: "Яскраві силуетні кросівки з амортизуючою підошвою для активного відпочинку."
  },
  {
    id: 4,
    name: "Кросівки Steel Frame",
    category: "Кросівки",
    brand: "URBN",
    price: 2650,
    oldPrice: null,
    icon: "icon-sneaker",
    image: "./img/sneakers/Puma-Pwrframe-Tr3-sneakers.webp",
    art: "art-4",
    sizes: ["40", "41", "42", "43", "44"],
    inStock: true,
    description: "Міцні кросівки із посиленим каркасом для максимальної стійкості та підтримки стопи."
  },

  // Худі
  {
    id: 5,
    name: "Худі Blockletter",
    category: "Худі",
    brand: "URBN",
    price: 1450,
    oldPrice: null,
    icon: "icon-hoodie",
    image: "./img/hoodie/prada-hoodie-1.webp",
    art: "art-5",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    description: "Оверсайз худі зі щільної бавовни з мінімалістичним фірмовим принтом."
  },
  {
    id: 6,
    name: "Худі Cloudwash",
    category: "Худі",
    brand: "URBN",
    price: 1590,
    oldPrice: 1590,
    icon: "icon-hoodie",
    image: "./img/hoodie/prada-hoodie-2.webp",
    art: "art-6",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    description: "Затишне худі з ефектом вивареної тканини та м'яким начісом усередині."
  },
  {
    id: 7,
    name: "Худі Night Signal",
    category: "Худі",
    brand: "URBN",
    price: 1690,
    oldPrice: null,
    icon: "icon-hoodie",
    image: "./img/hoodie/puma-hoodie.webp",
    art: "art-7",
    sizes: ["S", "M", "L", "XL"],
    inStock: false,
    description: "Тепле худі глибокого відтінку з подвійним капюшоном та зручною кишенею-кенгуру."
  },
  {
    id: 8,
    name: "Худі Concrete",
    category: "Худі",
    brand: "URBN",
    price: 1380,
    oldPrice: null,
    icon: "icon-hoodie",
    image: "./img/hoodie/prada-Technical-fabric-hoodie.webp",
    art: "art-8",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    description: "Базове міське худі вільного крою, ідеальне для багатошарових осінніх образів."
  },

  // Кепки
  {
    id: 9,
    name: "Кепка Low Arc",
    category: "Кепки",
    brand: "URBN",
    price: 599,
    oldPrice: null,
    icon: "icon-cap",
    image: "./img/shablon.webp",
    art: "art-9",
    sizes: ["One Size"],
    inStock: true,
    description: "Класична бейсболка з низькою посадкою та вигнутим козирком для захисту від сонця."
  },
  {
    id: 10,
    name: "Кепка Fieldwork",
    category: "Кепки",
    brand: "URBN",
    price: 649,
    oldPrice: null,
    icon: "icon-cap",
    image: "./img/shablon.webp",
    art: "art-10",
    sizes: ["One Size"],
    inStock: true,
    description: "Практична кепка з дихаючого матеріалу з регульованим ремінцем заду."
  },
  {
    id: 11,
    name: "Кепка Nightshade",
    category: "Кепки",
    brand: "URBN",
    price: 620,
    oldPrice: null,
    icon: "icon-cap",
    image: "./img/shablon.webp",
    art: "art-11",
    sizes: ["One Size"],
    inStock: false,
    description: "Стильна темна кепка з вишитим логотипом, що пасує до будь-якого вуличного луку."
  },
  {
    id: 12,
    name: "Кепка Sunline",
    category: "Кепки",
    brand: "URBN",
    price: 549,
    oldPrice: null,
    icon: "icon-cap",
    image: "./img/shablon.webp",
    art: "art-12",
    sizes: ["One Size"],
    inStock: true,
    description: "Яскравий літній головний убір з полегшеної бавовни для спекотних днів."
  },


  // Футболки
  {
    id: 13,
    name: "Футболка Base Tee",
    category: "Футболки",
    brand: "URBN",
    price: 490,
    oldPrice: null,
    icon: "icon-tshirt",
    image: "./img/shablon.webp",
    art: "art-13",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    description: "Базова якісна футболка з 100% бавовни, яка відмінно тримає форму після прання."
  },
  {
    id: 14,
    name: "Футболка Blockprint",
    category: "Футболки",
    brand: "URBN",
    price: 590,
    oldPrice: null,
    icon: "icon-tshirt",
    image: "./img/shablon.webp",
    art: "art-14",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    description: "Футболка з графічним геометрічним принтом на грудях та прямим кроєм."
  },
  {
    id: 15,
    name: "Футболка Skyline",
    category: "Футболки",
    brand: "URBN",
    price: 540,
    oldPrice: null,
    icon: "icon-tshirt",
    image: "./img/shablon.webp",
    art: "art-15",
    sizes: ["S", "M", "L", "XL"],
    inStock: false,
    description: "Легка дихаюча футболка з контрастними елементами та анатомічною посадкою."
  },
  {
    id: 16,
    name: "Футболка Mono Logo",
    category: "Футболки",
    brand: "URBN",
    price: 470,
    oldPrice: null,
    icon: "icon-tshirt",
    image: "./img/shablon.webp",
    art: "art-16",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    description: "Лаконічна футболка з монохромним логотипом на рукаві для повсякденного гардеробу."
  }
];

const productsContainer = document.querySelector(".catalog__holder")

function createProductCard(product) {
  return `
        <div class="catalog__product" data-product-id="${product.id}">
            <img class="catalog__product--image" src="${product.image}" alt="${product.icon}">
            <div class="catalog__info-holder">
                <p class="catalog__product--category">${product.category}</p>
                <h2 class="catalog__product--name">${product.name}</h2>
                <p class="catalog__product--price">${product.price} ₴</p>
                <button class="catalog__product--add-to-cart ${!product.inStock ? 'catalog__product--disabled-btn' : ''}" ${!product.inStock ? 'disabled' : ''}>${product.inStock ? 'У кошик' : 'Немає в наявності'}</button>
            </div>
        </div>
`
}

const numberOfProducts = document.querySelector("#number");

function renderProducts(products) {
  productsContainer.innerHTML = products.map(product => createProductCard(product)).join('')
  numberOfProducts.textContent = products.length
}

// renderProducts(products);

const resetButton = document.querySelector(".catalog__reset");
const filterBtns = document.querySelectorAll(".catalog__btn")
const priceSelect = document.querySelector(".catalog__sorting--select")
const availableBtn = document.querySelector(".catalog__available-btn-checkbox")
var usersCategory = "Усе";

function updateVisibleCatalog() {
  var visibleProducts = [...products]

  //за категорією:
  if(usersCategory !== "Усе") {
    visibleProducts = visibleProducts.filter(product => product.category === usersCategory)
  }

  //за ціною:
  const sortValue = priceSelect.value;

  if(sortValue === "asc") {
    visibleProducts.sort((a, b) => a.price - b.price)
  } else if(sortValue === "desc") {
    visibleProducts.sort((a, b) => b.price - a.price)
  }

  //за наявністю:
  if(availableBtn.checked) {
    visibleProducts = visibleProducts.filter(product => product.inStock === true)
  }

  renderProducts(visibleProducts)
}

resetButton.addEventListener("click", function() {
  usersCategory = "Усе";
  availableBtn.checked = false;
  priceSelect.value = "default";

  updateVisibleCatalog()
})

filterBtns.forEach(button => {
  button.addEventListener("click", function() {
    usersCategory = button.dataset.category;
    updateVisibleCatalog()
  })
})

priceSelect.addEventListener("change", updateVisibleCatalog)

availableBtn.addEventListener("change", updateVisibleCatalog)

updateVisibleCatalog()


// product modal
const productModal = document.getElementById("product-modal");
const closeModalBtn = document.getElementById("modal-close");
const modalImage = document.querySelector(".product-modal__img")
const modalCategory = document.getElementById("modal-category");
const modalName = document.getElementById("modal-name");
const modalPrice = document.getElementById("modal-price");
const modalText = document.getElementById("modal-description");
const modalInStock = document.getElementById("modal-available");
const modalCartBtn = document.getElementById("modal-cart");

function openProductModal(product) {
  modalImage.src = product.image;
  modalImage.alt = product.name

  modalCategory.textContent = `${product.brand} · ${product.category}`;
  modalName.textContent = product.name;
  modalPrice.textContent = `${product.price} ₴`;
  modalText.textContent = product.description || "";
  modalInStock.textContent = product.inStock ? "Є в наявності" : "Немає в наявності";
  modalCartBtn.disabled = !product.inStock;

  productModal.classList.add("is-open");
  document.body.classList.add("modal-open");
}

function closeProductModal() {
  productModal.classList.remove("is-open");
  document.body.classList.remove("modal-open");
}


productsContainer.addEventListener("click", function(event) {
  const cartButton = event.target.closest(".catalog__product--add-to-cart");

  if(!cartButton) return;

  if(cartButton.disabled) return;

  const productCard = cartButton.closest(".catalog__product");

  if(!productCard) return;

  const product = products.find(item => String(item.id) === productCard.dataset.productId);

  if(product) {
    openProductModal(product);
  }
});


closeModalBtn.addEventListener("click", closeProductModal);

productModal.addEventListener("click", function(event) {
  if (event.target === productModal) {
    closeProductModal();
  }
});


// - 1 + in modal
const amountMinus = document.querySelector("#amount-minus");
const amountPlus = document.querySelector("#amount-plus");
const amountValue = document.querySelector("#amount-value");

var amount = 1;

amountMinus.addEventListener("click", function() {
  if (amount > 1) {
    amount--;
    amountValue.textContent = amount;
  }
});

amountPlus.addEventListener("click", function() {
  amount++;
  amountValue.textContent = amount;
});


// scroll to top button
const scrollBtn = document.getElementById("scroll-top")

window.addEventListener("scroll", function() {
  if(window.scrollY > 300) {
    scrollBtn.classList.add("show")
  } else {
    scrollBtn.classList.remove("show")
  }
})

scrollBtn.addEventListener("click", function() {
  window.scrollTo(top)
})



// hero buttons
const viewCatalogBtn = document.querySelector(".view-catalog-btn")
const aboutBtn = document.querySelector(".about-store-btn")

viewCatalogBtn.addEventListener("click", function() {
  document.querySelector("#catalog").scrollIntoView()
})

aboutBtn.addEventListener("click", function() {
  document.querySelector("#about").scrollIntoView()
})



// search system
const searchInput = document.getElementById("search-input")
const searchDropdown = document.getElementById("search-dropdown")

function renderSearchResults(filteredProducts) {
  searchDropdown.replaceChildren()

  if(filteredProducts.length === 0) {
    const message = document.createElement("p");
    message.textContent = "Товарів не знайдено";
    searchDropdown.append(message)
  } else{
    filteredProducts.forEach(function(product) {
      const item = document.createElement("button");

      item.type = "button";
      item.classList.add("search__item");
      item.textContent = `${product.name} · ${product.price} ₴`;

      item.addEventListener("click", function() {
        openProductModal(product)
        searchDropdown.classList.remove("show")
        searchInput.value = product.name;
      });

      searchDropdown.append(item);
    });
  }

  searchDropdown.classList.add("show")
}

function searchProducts() {
  const query = searchInput.value.trim().toLowerCase();

  const filteredProducts = products.filter(function(product) {
    return product.name.toLowerCase().includes(query);
  });

  renderSearchResults(filteredProducts);
}

searchInput.addEventListener("focus", searchProducts);

searchInput.addEventListener("input", searchProducts);

document.addEventListener("click", function(event) {
  if(!event.target.closest(".search")) {
    searchDropdown.classList.remove("show");
  }
});