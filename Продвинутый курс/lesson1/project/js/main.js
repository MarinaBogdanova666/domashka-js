let app = new Vue({
    el: '#app',
    data: {
        api: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json',
        allProducts: [],
        img: 'https://via.placeholder.com/150',
        filteredProducts: [],
        goods: [],
        showCart: false,
    },
    mounted: function(){
        this.getProducts();
        
    },
    methods: {
        getProducts(){
            fetch(this.api)
                    .then(result => result.json()
                                                .then(({contents}) => {
                                                    this.allProducts = [...contents];
                                                    this.filteredProducts = [...contents];
                                                })
                    )
                    .catch(error => console.log(error))
        },
        addToCart(product){
            let elemGoods = this.goods.find(elem => elem.id_product == product.id_product);
            if (elemGoods) {
                elemGoods.quantity++
            } else {
                this.goods.push(product)
            }
        },
        
        toggleCart(){
            this.showCart = !this.showCart;
        },
    }
  })


































// class ProductsList {
//     constructor(container = '.products'){
//         this.container = container;
//         this.goods = [];
//         this.allProducts = [];
//         this._init();
//         this._getProducts()
//             .then(({contents}) => {
//                 this.goods = [...contents];
//                 this.render();
//             });
//     }
    
//     _getProducts(){
//         return fetch(API)
//                     .then(result => result.json())
//                     .catch(error => console.log(error))
//     }

//     render() {
//         const blockItem = document.querySelector(this.container);
//         for(let product of this.goods){
//             const productObj = new ProductItem(product);
//             this.allProducts.push(productObj);
//             blockItem.insertAdjacentHTML('beforeend',productObj.render())
//         }
//     }

//     _init() {
//         document.querySelector(this.container).addEventListener("click", (event) => {
//             if (event.target.classList.contains("buy-btn")) {
//                 let idProduct = event.target.parentElement.dataset.id;
//                 let product = this.goods.find(x => x.id_product == idProduct);
//                 cart.addGoods(product);
//             }
//         })
//     }
// }

// class ProductItem {
// 	constructor(product, img = 'https://via.placeholder.com/150'){
// 		this.title = product.product_name;
// 		this.price = product.price;
// 		this.id = product.id_product;
// 		this.img = img;
// 	}

// 	render() {
// 		 return `<div class="product-item" data-id="${this.id}">
//                 <h3>${this.title}</h3>
//                 <img src="${this.img}">
//                 <p>$${this.price}</p>
//                 <button class="buy-btn">Купить</button>
//             </div>`
// 	}
// }

// class CartItem extends ProductItem{
//     constructor(product, img = 'https://via.placeholder.com/50'){
//         super(product, img);
//         this.quantity = product.quantity;
//         this.total = product.total;
//     }

//     render() {
//         return `<div class="cart-item" data-id="${this.id}">
//                 <img src="${this.img}">
//                 <h3>${this.title}</h3>
//                 <p>$${this.price}/шт.</p>
//                 <p>${this.quantity} шт.</p>
//                 <p class="total">$${this.total}</p>
//                 <button class="del-btn">X</button>
//             </div>`
//     }
// }

// class Cart {
//     constructor(){
//         this.goods = [];
//         this._init();
//     }

//     _init(){
//         document.querySelector(".btn-cart").addEventListener("click", (event) => {
//             document.querySelector(".cart-block").classList.toggle("invisible");
//         })

//         document.querySelector(".cart-block").addEventListener("click", (event) => {
//             if (event.target.classList.contains("del-btn")) {
//                this.removeGoods(event.target.parentElement.dataset.id);
//             }
//         })
//     }

//     addGoods(product) {
//         let existingProduct = this.goods.find(x => x.id_product == product.id_product);
//         if (existingProduct) {
//             existingProduct.quantity++;
//             existingProduct.total = existingProduct.price * existingProduct.quantity;
//         } else{
//             product.total = product.price;
//             this.goods.push(product);
//         }
//         this.render();
//     }

//     removeGoods(id) {
//         let existingProduct = this.goods.find(x => x.id_product == id);
//         if (existingProduct) {
//             if (existingProduct.quantity > 1) {
//                 existingProduct.quantity--;
//                 existingProduct.total = existingProduct.price * existingProduct.quantity;
//             } else {
//                 let productIndex = this.goods.indexOf(existingProduct);
//                 this.goods.splice(productIndex, 1);
//             }
//         }
//         this.render();
//     }

//     render() {
//         let cartInnerHtml = "";
//         this.goods.forEach(product => {
//            const cartItemObj = new CartItem(product);
//            cartInnerHtml += cartItemObj.render();
//         })
//         document.querySelector(".cart-block").innerHTML = cartInnerHtml;
//     }
// }

// let cart = new Cart();
// let list = new ProductsList();
// list.render();