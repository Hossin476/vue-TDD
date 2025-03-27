<template>
    <div>
        <ProductFilter @category-change="setCategory" @search-change="setSearchQuery" />
        <ProductSort @sort-change="setSortOption" />
        <div v-if="filteredProducts.length === 0">No products found</div>
        <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
</template>

<script>
import { useProductStore } from "../stores/productStore";
import ProductFilter from "./ProductFilter.vue";
import ProductSort from "./ProductSort.vue";
import ProductCard from "./ProductCard.vue";

export default {
    components: { ProductFilter, ProductSort, ProductCard },
    setup() {
        const productStore = useProductStore();

        const setCategory = (category) => {
            productStore.setCategory(category);
        };

        const setSearchQuery = (query) => {
            productStore.setSearchQuery(query);
        };

        const setSortOption = (option) => {
            productStore.setSortOption(option);
        };

        return {
            ...productStore,
            setCategory,
            setSearchQuery,
            setSortOption,
        };
    },
};
</script>