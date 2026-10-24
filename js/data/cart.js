import { products } from './data/products.js';
import { currentProduct } from `./products.js`;
let openCartHeaderIcon = document.getElementById("open-cart");
let addToCartModalBtn = document.getElementById("modal-cart");


// let productSizeS = document.getElementById("sizeS");
// let productSizeM = document.getElementById("sizeM");
// let productSizeL = document.getElementById("sizeL");
// let productSizeXL = document.getElementById("sizeXL");

let cart = []


let addItemsToCart = function(){
  addToCartModalBtn.addEventListener("click", function(){
    
    
    let findProduct = products.find(item => item.id === currentProductId)
    
  })
}

