Vue.component('search', {
    template: `
        <div class="search">
            <input @input="filterProducts" v-model="userSearch"  type="text" placeholder="Поиск">
            <div @click="filterProducts">
                <i class="fas fa-search"></i>
            </div>
        </div>
    `,
    data() {
        return{
            userSearch: "",
        }
    },
    methods:{
        filterProducts(){
            let regexp = new RegExp(this.userSearch, "i");
            this.$parent.filteredProducts = this.$parent.allProducts.filter(elem => regexp.test(elem.product_name));
        }
    },
})