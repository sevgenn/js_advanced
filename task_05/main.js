const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'

let app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: '',
        showBasket: false,
        cartItems: [],
        someImage: 'img/zaglushka.jpg',
    },
    methods: {
        loadGoods() {
            fetch(`${API_URL}catalogData.json`)
                .then((request) => request.json())
                .then((data) => {
                    this.goods = data;
                    this.filteredGoods = data;
                })
        },
        getBasket() {
            fetch(`${API_URL}getBasket.json`)
                .then((request) => request.json())
                .then((data) => {
                    this.cartItems = data.contents;
                })
        },
        addProduct(product) {
            let item = Object.assign({quantity: 1}, product)
            this.cartItems.push(item);
        },
        remove(product) {
            fetch(`${API_URL}deleteFromBasket.json`)
                .then((request) => request.json())
                .then((data) => {
                    if (product.quantity > 1){
                        product.quantity--;
                    } else {
                        this.cartItems.splice(this.cartItems.indexOf(product), 1);
                    }
                })
        },
        searchFor() {
            let regexp = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.goods.filter(item => regexp.test(item.product_name));
        }
    },
    mounted() {
        this.loadGoods();
        this.getBasket();
    }
})

