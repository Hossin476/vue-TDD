import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
    state: () => ({
        items: [],
    }),

    actions: {
        addToCart(product) {
            const existingItem = this.items.find((item) => item.product.id === product.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.items.push({ product, quantity: 1 });
            }
        },

        removeFromCart(productId) {
            this.items = this.items.filter((item) => item.product.id !== productId);
        },

        updateQuantity(productId, quantity) {
            const item = this.items.find((item) => item.product.id === productId);
            if (item) {
                item.quantity = quantity;
            }
        },

        clearCart() {
            this.items = [];
        },
    },

    getters: {
        totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),

        subtotal: (state) =>
            state.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),

        tax: (state) => state.subtotal * 0.08,

        grandTotal: (state) => state.subtotal + state.tax,
    },
});
