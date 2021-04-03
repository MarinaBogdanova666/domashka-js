class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this.fetchProducts();
    }
    
    fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    render() {
        const blockItem = document.querySelector(this.container);
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            blockItem.insertAdjacentHTML('beforeend',productObj.render())
        }
    }
    getSum() {
        let resultSum = this.allProducts.reduce((sum, item) => sum += item.price, 0);
        alert(resultSum);
    }    
}


class ProductItem {
	constructor(product, img = 'https://via.placeholder.com/150'){
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.img = img;
	}

	render() {
		 return `<div class="product-item" data-id="${this.id}">
                <h3>${this.title}</h3>
                <img src="${this.img}">
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
	}
}

let list = new ProductsList();
list.render();
list.getSum();

class cart {
    addProduct() {
    }
    removeProduct() {
    }
    changeProduct() {
    }
}

class elemCart {

}