const no_good = {
    id_product: 0,
    image: "images/nothing.jpg",
    product_name: "Товар отсутствует",
    description: "",
    price: "",
    quantity: 0,
}

const URL_API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest (url) {
    return new Promise((resolve, reject) => {
        let xhr;
        if ( window .XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if ( window .ActiveXObject) {
            xhr = new ActiveXObject( "Microsoft.XMLHTTP" );
        }
        xhr.open( 'GET' , url, true );
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 ) {
                if (xhr.status !== 200) {
                    reject('Error');
                } else {
                    resolve(xhr.responseText);
                }
            }
        }
        xhr.send();
    })
}

class ProductItem {
    constructor(item = no_good, img = "images/nothing.jpg") {
        this.id = item.id_product;
        this.product_name = item.product_name;
        this.image = img;
        this.description = item.description;
        this.price = item.price;
        this.quantity = item.quantity;
    }

    render() {
        return `<div class="col">
                    <div class="card text-center h-100">
                        <img src="${this.image}" class="card-img-top" alt="${this.product_name}">
                        <div class="card-body">
                            <h5 class="card-title">${this.product_name}</h5>
                            <!--<p class="card-text">${this.description}</p>-->
                            <p>Цена <span>${this.price}</span> руб.</p>
                            <button class="btn btn-buy btn-primary"
                                data-id="this.id" data-price="this.price" data-name="this.product_name">Купить
                            </button>
                        </div>
                    </div>
                </div>`;
    }
}

class ProductsList {
    constructor(container = '.row', cart, url = '/catalogData.json') {
        this.cart = cart;
        this.products = [];
        this.container = container;
        this.url = url;
        this.productsList = [];
    }

    fetchProducts() {
        fetch(`${URL_API}${this.url}`)
            .then((response) => {
                return response.json();
            })
            .then((request) => {
                this.products = request;
                this.render();
            })
            .catch((err) => {
                console.log(err.text)
            });
    }

    render() {
        this.products.forEach(product => {
            let productItem = new ProductItem(product);
            this.productsList.push(productItem);
            document.querySelector(this.container).insertAdjacentHTML('beforeend', productItem.render());
        });
    }

    addToBasket() {
        document.querySelector(this.container).addEventListener('click', event => {
            if (event.target.classList.contains('btn-buy')) {
                this.cart.addProduct(event.target);
            }
        });
    }

    calculateSumOfProducts() {
        this.fetchProducts();
        return this.products.reduce((acc, product) => acc += product.price * product.quantity, 0);
    }
}


class CartItem extends ProductItem {
    constructor(item) {
        super(item);
    }

    render() {
        return `<div class="col">
                <div class="card text-center h-100">
                    <img src="${this.image}" class="card-img-top" alt="${this.product_name}">
                    <div class="card-body">
                        <h5 class="card-title">${this.product_name}</h5>
                        <p>Цена <span>${this.price}</span> руб.</p>
                        <p>Количество <span>${this.quantity}</span> шт.</p>
                        <button class="btn btn_plus btn-primary"
                            data-id="this.id" data-price="this.price" data-name="this.product_name">+
                        </button>
                        <button class="btn btn_minus btn-primary"
                            data-id="this.id" data-price="this.price" data-name="this.product_name">-
                        </button>

                    </div>
                </div>
            </div>`;
    }

}

class Cart {
    constructor(container = '.cart', url_get = '/getBasket.json', url_add = '/addToBasket.json') {
        this.products = [];
        this.cartList = [];
        this.url_get = url_get;
        this.url_add = url_add;
        this.productsList = [];
        this.container = container;
        this.btn = document.querySelector('.btn-cart');
        this.element = document.querySelector('.cart');
        this.btn.addEventListener('click', this.onToggleCart.bind(this));
        this.btn_plus = document.querySelector('.btn-plus');
        this.btn_minus = document.querySelector('.btn-minus');
        this.btn_plus.addEventListener('click', this.addProduct.bind(this));
        this.btn_minus.addEventListener('click', this.delProduct.bind(this));
    }

    fetchProducts() {
        fetch(`${URL_API + '/catalogData.json'}`)
            .then((response) => {
                return response.json();
            })
            .then((request) => {
                this.products = request;
                this.render();
            })
            .catch((err) => {
                console.log(err.text)
            });
    }

    onToggleCart() {
        this.element.classList.toggle('active');
        }

    addProduct(event) {
        const id = event.target.getAttribute('data-id');
        let elem = this.products.find(product => product.id_product === id);
        this.cartList.push(elem);
        this.render();
    }

    delProduct(event) {
        const id = event.target.getAttribute('data-id');
        let elem = this.products.find(product => product.id_product === id);
        this.cartList.remove(elem);
        this.render();
    }

    getBasket() {
        fetch(`${URL_API}${this.url_get}`)
            .then((response) => {
                return response.json()
            })
            .then((goods) => {
                this.cartList = goods.contents;
                this.render();
            })
    }

    render() {
        this.cartList.forEach(product => {
            let productItem = new CartItem(product);
            this.productsList.push(productItem);
            document.querySelector(this.container).insertAdjacentHTML('beforeend', productItem.render());
        });
    }
}


const products = new ProductsList('.row');
const cart = new Cart('.cart');


document.querySelector('.btn-cart').addEventListener('click', event => {
    if (event.target.classList.contains('buy-btn')) {
        this.cart.addProduct(event.target);
    }
});
products.fetchProducts();
cart.getBasket();
