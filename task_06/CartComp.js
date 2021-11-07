Vue.component('cart', {
    props: ['cartItems', 'showbasket'],
    template:  `<div class="cart-block" v-show="showbasket">
                    <p v-if="!cartItems.length">Нет товаров</p>
                    <cart-item class="cart-item" v-for="item of cartItems" 
                      :key="item.id_product"
                      :cart-item="item">               
                    </cart-item>
                </div>`
});

Vue.component('cart-item', {
    props: ['cartItem'],
    template: `<div class="cart-item">
                    <div class="product-cart">
                        <h5 class="product-name">{{ cartItem.product_name }}</h5>
                        <p class="product-price">{{ cartItem.price }} руб.</p>
                        <p class="product-quantity">{{ cartItem.quantity }} шт.</p>
                    </div>
                    <div class="product-info">
                        <p class="total-sum">{{ cartItem.price * cartItem.quantity }} руб.</p>
                        <button class="btn-delete" @click="$parent.$emit('remove', cartItem)">X</button>
                    </div>
                    <hr>
                </div>`
});