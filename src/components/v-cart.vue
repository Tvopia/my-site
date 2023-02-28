<template>
  <div class="v-cart">
    <div class="header">
      <h4>Super store</h4>
      <router-link :to="{ name: 'catalog' }">
        <div class="back_to_catalog_btn">
          <button class="btn">
            Back to Catalog
            <i class="medium material-icons">reply</i>
          </button>
        </div>
      </router-link>
    </div>

    <p v-if="isCartEmpty">You haven't got any products...</p>
    <p v-else>Total sum: <b>₽{{ CART_TOTAL_SUM }}</b></p>

    <div class="itemsContainer">
      <vCartItem v-for="(item, index) in cartItems" :key="index" :cart_item_data="item.product"
      :quantity="item.quantity" @addToCart="addToCart(item.product)" @deleteFromCart="deleteFromCart(item.product)" />
    </div>
  </div>
</template>
  
<script>
import vCartItem from './v-cart-item.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART", "CART_TOTAL_SUM"]),

    isCartEmpty() {
      return this.CART.size === 0;
    },

    cartItems() {
      const items = [];

      this.CART.forEach((quantity, article) => {
        items.push({
          product: this.PRODUCTS.find(product => product.article === article),
          quantity: quantity
        });
      });

      return items;
    }
  },
  methods: {
    ...mapActions(["ADD_TO_CART", "DELETE_FROM_CART"]),

    addToCart(product) {
      this.ADD_TO_CART(product)
    },

    deleteFromCart(product) {
      this.DELETE_FROM_CART(product);
    },
  },
};
</script>
  
<style scoped>
.v-cart {
  width: 60%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: rgb(24, 21, 22);
  font-size: 20px;
  margin-bottom: 150px;
  position: absolute;
  box-sizing: border-box;
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.itemsContainer {
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-sizing: border-box;
}
</style>