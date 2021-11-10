Vue.component('goods', {
    props: ['goods', 'img'],
    template: `<div class="row row-cols-1 row-cols-md-3 g-4">
                    <good v-for="item of goods"
                        :key="item.id_product"
                        :img="img"
                        :good="item">
                    </good>
               </div>`
});

Vue.component('good', {
    props: ['good', 'img'],
    template:  `<div class="card h-100">
                    <img :src="img" class="card-img-top" alt="Some image">
                    <div class="card-body">
                        <h5 class="card-title">{{ good.product_name }}</h5>
                        <p>Цена <span>{{ good.price }}</span> руб.</p>
                        <button class="btn btn-buy btn-primary" @click="$parent.$emit('add-product', good)">Купить</button>
                    </div>
                </div>`
});