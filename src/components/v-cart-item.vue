<template>
    <div class="v-cart-item">
         <vCatalog />
          <vCart />
        </div>
    </template>
    
 <script>
 import vCatalog from "./v-catalog.vue";
 import vCart from "./v-cart.vue";

    export default {
         name: "v-cart-item",
         components: { vCatalog, vCart },
          props: {},
           data() {
         return {
            title: "hello folks!",
        };
    },
     computed: {},
      methods:{},
       watch: {},
       mounted() {
        console.log("hello in here!")
    },
 };  
 </script>
    
    <style lang="scss">
    .v-cart-item{
         flex-basis: 25%;
          box-shadow: 0 0 8px 0 rgb(148, 57, 57);
          padding: 30px;
          margin: 20px;
          
         }
    </style>