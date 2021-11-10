const API_URL = 'http://127.0.0.1:3000/'

let app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: '',
        showBasket: false,
        cartItems: [],
        catalogUrl: 'catalogData',
        cartUrl: 'getBasket',
        addToCartUrl: 'addToBasket',
        deleteFromCartUrl: 'deleteFromBasket',
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
            fetch(`${API_URL + this.cartUrl}`, {
                method: "POST",
                headers: {'Content-Type': 'application/JSON'}
            })
                .then((request) => request.json())
                .then((data) => {
                    this.cartItems = data;
                })
        },
        addProduct(product) {
            fetch(`${API_URL + this.addToCartUrl}`, {
                method: "POST",
                headers: {'Content-Type': 'application/JSON'},
                body: JSON.stringify({product_name: product.product_name, price: product.price})
            })
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
            fetch(`${API_URL + this.deleteFromCartUrl}`, {
                method: "POST",
                headers: {'Content-Type': 'application/JSON'},
            })
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
            this.filteredGoods = this.goods.filter(item => regexp.test(item.product_name));
        }
    },
    mounted() {
        this.loadGoods();
        this.getBasket();
    }
});

