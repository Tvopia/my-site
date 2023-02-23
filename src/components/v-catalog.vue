<template>
  <div class="v-catalog"></div>
  <h1 class="catalog">Catalog!</h1>
  <div class="productsCont">
    <vCatalogItem 
  v-for="product in PRODUCTS" 
  :key="product.article"
  :product_data="product"
  @addToCart ="addToCart"
  />
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
        ...mapGetters(['PRODUCTS']), 
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
        console.log("Данные пришли");
      }
    });
    },
    
};
</script>

<style lang="scss">
.productsCont {
  position: relative;
  top: 80px; 
    flex-direction: row;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 32px;
}
.catalog {
  position: relative;
  left: 468px; 
}

</style>