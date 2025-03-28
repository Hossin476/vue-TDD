<template>
    <div class="shopping-cart">
        <h2>Your Cart ({{ totalItems }} items)</h2>
        <div v-if="items.length === 0">
            <p>Your cart is empty.</p>
        </div>
        <div v-else>
            <CartItem v-for="item in items" :key="item.product.id" :item="item" @update-quantity="updateQuantity"
                @remove-item="removeItem" />
            <CartSummary :subtotal="subtotal" :tax="tax" :grandTotal="grandTotal" @checkout="checkout" />
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from "../stores/cartStore";
import CartItem from "./CartItem.vue";
import CartSummary from "./CartSummary.vue";

export default {
    components: { CartItem, CartSummary },
        const cartStore = useCartStore();

        const updateQuantity = (productId, quantity) => {
            cartStore.updateQuantity(productId, quantity);
        };

        const removeItem = (productId) => {
            cartStore.removeFromCart(productId);
        };

        const checkout = () => {
            console.log("Checkout will be implemented later.");
        };
};
</script>

<style scoped>
.shopping-cart {
    margin: 20px;
}
</style>
