const size = {
    large: {
        price: 100,
        calories: 40,
    },
    small: {
        price: 50,
        calories: 20,
    },
};
const stuffings = {
    cheese: {
        price: 10,
        calories: 20,
    },
    salad: {
        price: 20,
        calories: 5,
    },
    potato: {
        price: 15,
        calories: 10,
    },
};
toppings = {
    spice: {
        price: 15,
        calories: 0,
    },
    mayonnaise: {
        price: 20,
        calories: 5,
    },
};


class Item {
    constructor(el) {
        this.name = el.value;
        this.price = Number(el.dataset['price']);
        this.calories = Number(el.dataset['cal']);
    }

}

class Burger {
    constructor(size, stuffing, topping) {
        this.size = new Item(this._getItem(size));
        this.stuffing = new Item(this._getItem(stuffing));
        this.toppings = this._getList(topping);
    }

    _getItem(name) {
        return document.querySelector(`input[name="${name}"]:checked`);
    }

    _getList(name) {
        let tops = [];
        document.querySelectorAll(`input[name="${name}"]:checked`).forEach(el => tops.push(new Item(el)));
        return tops;
    }

    _calculatePrice() {
        let topsPrice = this.toppings.reduce((acc, topping) => acc + topping.price, 0);
        return this.size.price + this.stuffing.price + topsPrice;
    }

    _calculateCalories() {
        let topsCalories = this.toppings.reduce((acc, topping) => acc + topping.calories, 0);
        return this.size.calories + this.stuffing.calories + topsCalories;
    }

    renderData() {
        document.querySelector("#price").textContent = this._calculatePrice();
        document.querySelector("#calories").textContent = this._calculateCalories();
    }
}


const button = document.querySelector('button').addEventListener('click', function() {
    let hamburger = new Burger('size', 'stuffing', 'topping');
    hamburger.renderData();
    }
    );

