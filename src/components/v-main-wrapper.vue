<template>
    <div class="v-main-wrapper">
         <vCatalog />
          <vCart />
        </div>
    </template>
    
 <script>
 import vCatalog from "./v-catalog.vue";
 import vCart from "./v-cart.vue";

    export default {
         name: "v-main-wrapper",
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
    .v-main-wrapper{
        display: flex;
         justify-content: center;
          max-width: 900px;
          margin: 0 auto;
          & {
            display: flex;
            gap: 16px;
          }
         }
    </style>