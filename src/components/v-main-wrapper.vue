<template>
    <div class="v-main-wrapper">
      <kepp-alive>
        <router-view></router-view>
      </kepp-alive>
        </div>
    </template>
    
 <script>

 import { mapGetters } from "vuex";

    export default {
         name: "v-main-wrapper",
          props: {},
           data() {
         return {
            title: "hello folks!",
        };
    },
     computed: {
      ...mapGetters(["CART"]),
     },
      methods:{},
       watch: {},
       mounted() {
        console.log("hello in here!")
    },
 };  
 </script>
    
    <style lang="scss">
    .v-main-wrapper{
   
          max-width: 900px;
          margin: 0 auto;
          & {
            display: flex;
            gap: 16px;
          }
         }
    </style>