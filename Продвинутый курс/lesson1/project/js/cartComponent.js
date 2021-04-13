Vue.component('cart', {
    template:`
        <div v-if="showCart" class="cart-block">
            <div v-if="!goods.length" class="emptyCart">В корзине пока пусто...</div>
            <div v-for="product in goods"  class="cart-item">
                <img :src="imgCart">
                <h3>{{product.product_name}}</h3>
                <p>{{product.price}}p/шт.</p>
                <p>{{product.quantity}} шт.</p>
                <p class="total">{{ product.price * product.quantity }}p</p>
                <button @click="removeFromCart(product)" class="del-btn">X</button>
            </div>
        </div>
    `,
    data() {
        return{
            imgCart: 'https://via.placeholder.com/50',
        }
    },
    props:['goods', 'showCart'],
    methods: {
        removeFromCart(product){
            if (product.quantity > 1) {
                product.quantity--  
            } else {
                let elemIndex = this.goods.indexOf(product);
                this.goods.splice(elemIndex, 1);
            }
        },

    },
})