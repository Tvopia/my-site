<template>
  <div class="wrapper">
    <div class="header">
      <h4>Super store</h4>
      <router-link :to="{ name: 'cart' }">
        <div class="cartLink">
          <span class="totalSum">₽{{ CART_TOTAL_SUM }}</span>
          <i class="medium material-icons">shopping_cart</i>
        </div>
      </router-link>
    </div>

    <div class="products">
      <vCatalogItem v-for="product in PRODUCTS" :key="product.article" :product_data="product" @addToCart="addToCart" />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "v-catalog",
  components: {
    vCatalogItem
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['PRODUCTS', "CART", "CART_TOTAL_SUM"]),
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FRON_API", "ADD_TO_CART"]),

    addToCart(data) {
      this.ADD_TO_CART(data)
    },
  },
  mounted() {
    this.GET_PRODUCTS_FRON_API()
      .then((response) => {
        if (response.data) {
          console.log("Данные пришли", response.data);
        }
      });
  },

};
</script>

<style lang="scss">
.wrapper {
  width: 60%;
  display: flex;
  flex-direction: column;
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cartLink {
  display: flex;
  gap: 8px;
  align-items: center;
}

.totalSum {
  font-size: 20px;
  font-weight: 500;
}

.products {
  position: relative;
  top: 80px;
  flex-direction: row;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
}
</style>