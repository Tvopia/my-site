<template>
    <div class="v-cart-item">
        <img class="v-cart-item_image" :src="require('../assets/images/' + cart_item_data.image)" alt="pic" />
        <div>
            <p>{{ cart_item_data.name }}</p>
            <p>{{ cart_item_data.price }}</p>
            <p>{{ cart_item_data.article }}</p>
            <p>{{ cart_item_data.about }}</p>
        </div>

        <div class="quantity_controls">
            <button class="btn" @click="deleteFromCart">-</button>
            <span>{{ quantity }}</span>
            <button class="btn" @click="addToCart">+</button>
        </div>
    </div>
</template>
    
<script>


export default {
    name: "v-cart-item",
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {};
            }
        },
        quantity: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            title: "hello folks!",
        };
    },
    computed: {},
    methods: {
        addToCart() {
            this.$emit("addToCart");
        },
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
.v-cart-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 rgb(148, 57, 57);
    box-sizing: border-box;
    padding-left: 24px;
    padding-right: 24px;

    &_image {
        min-width: 10%;
    }
}

.btn {
    background: rgb(231, 77, 193);
}

.quantity_controls {
    display: flex;
    gap: 24px;
}
</style>