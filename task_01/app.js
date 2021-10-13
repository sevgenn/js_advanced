const goods = [
    {
        id_product: 1,
        image: "images/product_3.jpg",
        product_name: "Стол",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            "Ab deleniti dicta dolor doloribus id illo necessitatibus quam quo quos tenetur",
        price: 45000
    },
    {
        id_product: 2,
        image: "images/product_1.jpg",
        product_name: "Стул",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            "Ab deleniti dicta dolor doloribus id illo necessitatibus quam quo quos tenetur",
        price: 2500
    },
    {
        id_product: 3,
        image: "images/product_3.jpg",
        product_name: "Табурет",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            "Ab deleniti dicta dolor doloribus id illo necessitatibus quam quo quos tenetur",
        price: 15000
    },
    {
        id_product: 4,
        image: "images/product_1.jpg",
        product_name: "Полка",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            "Ab deleniti dicta dolor doloribus id illo necessitatibus quam quo quos tenetur",
        price: 2500
    },
    {
        id_product: 5,
        image: "images/product_3.jpg",
        product_name: "Шкаф",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            "Ab deleniti dicta dolor doloribus id illo necessitatibus quam quo quos tenetur",
        price: 35000
    },
    {
        id_product: 6,
        image: "images/product_1.jpg",
        product_name: "Тумба",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit." +
            "Ab deleniti dicta dolor doloribus id illo necessitatibus quam quo quos tenetur",
        price: 35000
    },
]

const renderProductItem = (product_name="Товар отсутствует", image="images/nothing.jpg", description="", price="") => {
    return `<div class="col">
                <div class="card h-100">
                    <img src="${image}" class="card-img-top" alt="${product_name}">
                    <div class="card-body">
                        <h5 class="card-title">${product_name}</h5>
                        <p class="card-text">${description}</p>
                        <p>Цена <span>${price}</span> руб.</p>
                    </div>
                </div>
            </div>
    `;
};

const renderProductList = (lst = [{product_name: "Товар отсутствует", image: "images/nothing.jpg", description: "", price: ""}]) => {
    let productList = lst.map(({product_name, image, description, price}) =>
        renderProductItem(product_name, image, description, price));
    document.querySelector('.row').innerHTML = productList.join('');
};

renderProductList(goods);