<template>
  <div class="cart-item">
    <img :src="item.product.images[0]" :alt="item.product.name" class="cart-item-image" />
    <div class="cart-item-details">
      <h3>{{ item.product.name }}</h3>
      <p>Price: ${{ item.product.price.toFixed(2) }}</p>
      <p>Total: ${{ (item.product.price * item.quantity).toFixed(2) }}</p>
      <div class="cart-item-actions">
        <input
          type="number"
          min="1"
          v-model.number="quantity"
          @change="updateQuantity"
        />
        <button @click="removeItem">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      quantity: this.item.quantity,
    };
  },
  methods: {
    updateQuantity() {
      this.$emit("update-quantity", this.item.product.id, this.quantity);
    },
    removeItem() {
      this.$emit("remove-item", this.item.product.id);
    },
  },
};
</script>

<style scoped>
.cart-item {
  display: flex;
  margin-bottom: 20px;
}
.cart-item-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
}
.cart-item-details {
  flex: 1;
}
.cart-item-actions {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
</style>
