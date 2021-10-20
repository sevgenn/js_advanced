const goods = [
    {
        id_product: 1,
        image: "images/product_3.jpg",
        product_name: "Стол",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            "Ab deleniti dicta dolor doloribus id illo necessitatibus quam quo quos tenetur",
        price: 45000,
        quantity: 23,
    },
    {
        id_product: 2,
        image: "images/product_1.jpg",
        product_name: "Стул",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            "Ab deleniti dicta dolor doloribus id illo necessitatibus quam quo quos tenetur",
        price: 2500,
        quantity: 17,
    },
    {
        id_product: 3,
        image: "images/product_3.jpg",
        product_name: "Табурет",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            "Ab deleniti dicta dolor doloribus id illo necessitatibus quam quo quos tenetur",
        price: 15000,
        quantity: 7,
    },
    {
        id_product: 4,
        image: "images/product_1.jpg",
        product_name: "Полка",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            "Ab deleniti dicta dolor doloribus id illo necessitatibus quam quo quos tenetur",
        price: 2500,
        quantity: 3,
    },
    {
        id_product: 5,
        image: "images/product_3.jpg",
        product_name: "Шкаф",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            "Ab deleniti dicta dolor doloribus id illo necessitatibus quam quo quos tenetur",
        price: 35000,
        quantity: 15,
    },
    {
        id_product: 6,
        image: "images/product_1.jpg",
        product_name: "Тумба",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            "Ab deleniti dicta dolor doloribus id illo necessitatibus quam quo quos tenetur",
        price: 35000,
        quantity: 10,
    },
];


class ProductItem {
    constructor(id, product_name, image, description, price, quantity) {
        this.id = id;
        this.product_name = product_name;
        this.image = image;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }

    render() {
        return `<div class="col">
                <div class="card h-100">
                    <img src="${this.image}" class="card-img-top" alt="${this.product_name}">
                    <div class="card-body">
                        <h5 class="card-title">${this.product_name}</h5>
                        <p class="card-text">${this.description}</p>
                        <p>Цена <span>${this.price}</span> руб.</p>
                    </div>
                </div>
            </div>
    `;
    }
}

class ProductsList {
    constructor(container) {
        this.products = [];
        this.container = container;
    }

    #fetchProducts() {
        this.products = goods;
    }

    calculateSumOfProducts() {
        this.#fetchProducts();
        return this.products.reduce((acc, product) => acc += product.price * product.quantity, 0);
    }

    render() {
        let productsList = [];
        this.#fetchProducts();
        this.products.forEach(product => {
            let productItem = new ProductItem(product.id, product.product_name, product.image,
                product.description, product.price, product.quantity);
            productsList.push(productItem.render());
        });
        document.querySelector(this.container).insertAdjacentHTML('beforeend', productsList.join(''));
    }
}


class CartItem extends ProductItem {
    constructor(id, product_name, image, description, price, quantity) {
        super(id, product_name, image, description, price);
        this.quantity = 0;
    }

    render() {

    }
}

class Cart {
    constructor() {
        this.cartList = [];
    }

    addProduct(cartItem) {

    }

    removeProduct(cartItem) {

    }

    calculateSum() {

    }

    render() {

    }
}


const products = new ProductsList('.row');
products.render();
