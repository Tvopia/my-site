<template>
  <div class="v-main-wrapper">
    <router-view />
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
  methods: {},
  watch: {},
  mounted() {
    console.log("hello in here!")
  },
};
</script>
    
<style lang="scss">
.v-main-wrapper {
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  & {
    display: flex;
    gap: 16px;
  }
}
</style>