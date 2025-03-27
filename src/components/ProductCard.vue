<template>
    <div class="product-card">
        <img :src="product.images[0]" :alt="product.name" class="product-image" />
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-price">${{ product.price }}</p>
        <p class="product-rating">Rating: {{ product.rating }} / 5</p>
        <button @click="addToCart" class="add-to-cart-button">Add to Cart</button>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProductCard',
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.product);
        }
    }
});
</script>

<style scoped>
</style>