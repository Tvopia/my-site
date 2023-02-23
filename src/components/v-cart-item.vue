<template>
    <div class="v-cart-item">
        <img class="v-cart-item_image"
    :src="require('../assets/images/' + cart_item_data.image)" 
    alt="pic"
    />
    <div>
        <p>{{ cart_item_data.name }}</p>
        <p>{{ cart_item_data.price }}</p>
        <p>{{ cart_item_data.article }}</p>
        <p>{{ cart_item_data.about }}</p>
    </div>
    <div class="v-cart-item__quantity">
        <p>Quantity</p>
        <span>
            {{ cart_item_data.quantity }}
        </span>
    </div>
    <button @click="deleteFromCart" class="dilete">Delete</button>
        </div>
    </template>
    
 <script>
 

    export default {
         name: "v-cart-item",
          props: {
            cart_item_data:{
                type: Object,
                default() {
                    return{};
                }
            }
          },
           data() {
         return {
            title: "hello folks!",
        };
    },
     computed: {},
      methods:{
        deleteFromCart() {
            this.$emit("deleteFromCart");
        },
      },
       watch: {},
       mounted() {
        console.log("hello in here!")
    },
 };  
 </script>
    
    <style lang="scss">
    .v-cart-item{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
         flex-basis: 25%;
          box-shadow: 0 0 8px 0 rgb(148, 57, 57);
          padding: 30px;
          margin: 20px;
          &_image {
            min-width: 10%;
          }
         }
         .dilete{
            border: none; 
            border-radius: 8px;
            padding: 6px 12px;
            color: white;
            background: rgba(255, 0, 255, 0.37);
         }
    </style>