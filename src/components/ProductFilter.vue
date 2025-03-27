<template>
    <div class="product-filter">
        <div class="category-filter">
            <label for="category">Category:</label>
            <div id="category" >
                <button data-test="category-option" value="all" @click="onCategoryChange">All Categories</button>
                <button data-test="category-option" @click="onCategoryChange(category.id)" v-for="category in categories" :key="category" :value="category">
                    {{ category }}
                </button>
            </div>
        </div>
        <div class="search-filter">
            <label for="search">Search:</label>
            <input id="search" type="text" v-model="searchQuery" @input="onSearchChange"
                placeholder="Search products by name" />
        </div>
    </div>
</template>

<script>
import { categories } from '../../mock-data/products';
export default {
    name: "ProductFilter",
    props: {
        categories: categories,
        selectedCategory: null
    },
    data() {
        return {
            searchQuery: "",
        };
    },
    methods: {
        onCategoryChange(id) {
            this.$emit("category-change",id);
        },
        onSearchChange() {
            this.$emit("search-change", this.searchQuery);
        },
    },
};
</script>

<style scoped>
</style>