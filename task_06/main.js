const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'

let app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: '',
        showBasket: false,
        cartItems: [],
        catalogUrl: 'catalogData.json',
        cartUrl: 'getBasket.json',
        addToCartUrl: 'addToBasket.json',
        deleteFromCartUrl: 'deleteFromBasket.json',
        someImage: 'img/zaglushka.jpg',
    },
    methods: {
        loadGoods() {
            fetch(`${API_URL + this.catalogUrl}`)
                .then((request) => request.json())
                .then((data) => {
                    this.goods = data;
                    this.filteredGoods = data;
                })
        },
        getBasket() {
            fetch(`${API_URL + this.cartUrl}`)
                .then((request) => request.json())
                .then((data) => {
                    this.cartItems = data.contents;
                })
        },
        addProduct(product) {
            fetch(`${API_URL + this.addToCartUrl}`)
                .then((request) => request.json())
                .then((data) => {
                    if (data.result === 1) {
                        let cartGood = this.cartItems.find(el => el.id_product === product.id_product);
                        if (cartGood) {
                            cartGood.quantity++;
                        } else {
                            let newProduct = Object.assign({quantity: 1}, product);
                            this.cartItems.push(newProduct);
                        }
                    }
                });
        },
        remove(product) {
            fetch(`${API_URL + this.deleteFromCartUrl}`)
                .then((request) => request.json())
                .then((data) => {
                    if (data.result === 1) {
                        if (product.quantity > 1) {
                            product.quantity--;
                        } else {
                            let ind = this.cartItems.indexOf(product);
                            this.cartItems.splice(ind, 1);
                        }
                    }
                });
        },
        searchFor(searchLine) {
            let regexp = new RegExp(searchLine, 'i');
            console.log(regexp);
            this.filteredGoods = this.goods.filter(item => regexp.test(item.product_name));
            console.log(this.filteredGoods);
        }
    },
    mounted() {
        this.loadGoods();
        this.getBasket();
    }
});

