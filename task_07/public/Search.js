Vue.component('search', {
    data() {
        return {
            searchLine: ''
        }
    },
    template:  `<div class="search-form">
                    <input id="search" class="me-2" type="search" aria-label="Search" v-model="searchLine">
                    <button class="btn btn-outline-success btn-search" type="submit" @click="$emit('search-for', searchLine)">
                    Search</button>
                </div>`
});