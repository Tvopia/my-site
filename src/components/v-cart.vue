<template>
    <div class="v-cart"> 
      <router-link :to="{name: 'catalog'}">
    <div class="v-catalog__link_to_cart">
      <i class="medium material-icons">shopping_cart</i>
      {{ CART.length }}
    </div>
    <div class="back_to_catalog_btn">
      <button class="btn">Back to Catalog
        <i class="medium material-icons">reply</i>
      </button>
    </div>
    
  </router-link>
  <p v-if="!CART.length">You haven't got any products...</p>
  
        <vCartItem 
        v-for="(item, index) in CART"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        />
    </div>
   
  </template>
  
  <script>
  import vCartItem from './v-cart-item.vue';
  import { mapActions, mapGetters} from 'vuex';
  export default {
      name: "v-cart",
      components: {
        vCartItem,
      },
      props: {
        cart_data:{
            type: Array,
            default(){
                return[];
            },
        },
      },
      data() {
          return {};
      },
      computed:{
        ...mapGetters(["CART"]),
      },
      methods:{
        ...mapActions(["DELETE_FROM_CART"]),
        deleteFromCart(index) {
           this.DELETE_FROM_CART(index);
        },
      },
  };
  </script>
  
  <style scoped>
  .v-cart{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: rgb(24, 21, 22);
    font-size: 20px;
    margin-bottom: 150px;
    position: absolute;
  }
  p{
    text-align: center;
    font-size: 26px;
  }
  .back_to_catalog_btn{
    padding: 32px;
    position: relative;
    left: 56px;
  }
  
  </style>