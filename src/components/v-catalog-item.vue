<template>
 <div class="v-catalog-item"> 
    <img class="v-catalog-item_image"
    :src="require('../assets/images/' + product_data.image)" 
    alt="pic"
    />
    <p class="v-catalog-item__name">{{ product_data.name }}</p>
    <p class="v-catalog-item__price"> {{ product_data.price }}</p>
    <p class="v-catalog-item_price"> {{ product_data.about }}</p>
    <button class="v-catalog-item_add_to_cart_btn" @click="addToCart">Add to cart</button>
</div>
</template>

<script>

  export default {
      name: "v-catalog-item",
      props: {
        product_data: {
            type: Object,
            default() {
                return {};
            },
        }

      },

      data() {
          return {};
      },
      
      methods: {
        addToCart() {
            this.$emit("addToCart", this.product_data);
        },
      },

  };
  </script>
  
  <style>
  .v-catalog-item {
        display: flex;
         justify-content: space-between;
         flex-wrap: wrap;
         align-items: center;
         flex-direction: column;
         box-shadow: 1px 1px 8px 0px rgba(39, 76, 104, 0.2);
         border-radius: 15px;
         padding: 24px;
         background: pink;
         
  }

  .v-catalog-item_add_to_cart_btn {
    border: none;
    border-radius: 8px;
    padding: 6px 12px;
    color: white;
    background: rgba(255, 0, 255, 0.37);
  }
  
  .v-catalog-item_add_to_cart_btn:hover {
    transform: scale(.93) rotate(0.04turn);
    transition: all .25s;
    cursor: pointer;
  }

  </style>