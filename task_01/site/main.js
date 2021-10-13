const goods =
[
    {
        category: "дом",
        name: "комфорт 1",
        image: "products_img/product_1.jpg",
        short_desc: "комфортный стул",
        description: "подойдет для просмотра фильмов",
        price: "2989.5",
        quantity: "17"
    },
    {
        category: "дом",
        name: "комфорт 2",
        image: "products_img/product_2.jpg",
        short_desc: "очень комфортный стул",
        description: "подойдет для общения с друзьями",
        price: "3687.2",
        quantity: "21"
    },
    {
        category: "дом",
        name: "люкс",
        image: "products_img/product_3.jpg",
        short_desc: "использованы премиальные материалы",
        description: "для тех, кто стремится к лучшему",
        price: "8157.99",
        quantity: "7"
    },
    {
        category: "офис",
        name: "стандарт",
        image: "products_img/product_4.jpg",
        short_desc: "универсальное решение",
        description: "подойдет для любого офиса",
        price: "1895.25",
        quantity: "27"
    },
    {
        category: "офис",
        name: "премиум",
        image: "products_img/product_5.jpg",
        short_desc: "улучшенный дизайн",
        description: "идеально впишется в строгий интерьер офиса",
        price: "3587.41",
        quantity: "9"
    },
    {
        category: "модерн",
        name: "новинка",
        image: "products_img/product_6.jpg",
        short_desc: "инновационный дизайн",
        description: "нестандартное решение для современного интерьера",
        price: "5361.47",
        quantity: "18"
    },
    {
        category: "модерн",
        name: "прогресс",
        image: "products_img/product_7.jpg",
        short_desc: "прогрессивный дизайн",
        description: "функциональное и комфортное решение",
        price: "6789.33",
        quantity: "12"
    },
    {
        category: "классика",
        name: "венеция",
        image: "products_img/product_8.jpg",
        short_desc: "классические формы",
        description: "окунитесь в европейский комфорт",
        price: "4147.51",
        quantity: "25"
    },
    {
        category: "классика",
        name: "тоскана",
        image: "products_img/product_9.jpg",
        short_desc: "эргономичная спинка",
        description: "почувствуйте комфорт и насладитесь цветовой гаммой",
        price: "7147.35",
        quantity: "18"
    },
    {
        category: "классика",
        name: "рим",
        image: "products_img/product_10.jpg",
        short_desc: "удачные пропорции",
        description: "компактность и функциональность",
        price: "8357.77",
        quantity: "8"
    },
]

const renderProductItem = (name, image, description, price) => {
    return `
        <a href="details.html">
            <img src="${image}" alt="${name}">
            <div class="text">
                <img src="home_img/arrow.svg" alt="arrow">
                <h4 class="slider_text_h2">${name}</h4>
                <p class="slider_text_content">${description}</p>
                <p>Price $ <span>${price}</span></p>
            </div>
        </a>
    `;
};

const renderProductList = (list = [{name: 'Товар отсутствует', image: 'products_img/nothing.jpg', description: '', price: ''}]) => {
    let productList = list.map(({name, image, description, price}) =>
    renderProductItem(name, image, description, price));
    document.querySelector('.products_img').innerHTML = productList.join('');
};

renderProductList(goods);