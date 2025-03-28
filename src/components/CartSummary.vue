<template>
  <div class="cart-summary">
    <p>Subtotal: ${{ subtotal.toFixed(2) }}</p>
    <p>Tax (8%): ${{ tax.toFixed(2) }}</p>
    <p><strong>Grand Total: ${{ grandTotal.toFixed(2) }}</strong></p>
    <button @click="checkout">Checkout</button>
  </div>
</template>

<script>
export default {
  name: "CartSummary",
  props: {
    subtotal: {
      type: Number,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
    },
    grandTotal: {
      type: Number,
      required: true,
    },
  },
  methods: {
    checkout() {
      this.$emit("checkout");
    },
  },
};
</script>

<style scoped>
.cart-summary {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}
.cart-summary p {
  margin-bottom: 10px;
}
.cart-summary button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
