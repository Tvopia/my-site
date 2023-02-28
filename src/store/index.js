import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    cart: new Map()
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    },
    CART_TOTAL_SUM(state) {
      var totalSum = 0;

      state.cart.forEach((quantity, article) => {
        const product = state.products.find(product => product.article === article);
        const sum = product.price * quantity;
        totalSum += sum;
      })

      return totalSum;
    }
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    ADD_TO_CART: (state, product) => {
      if (state.cart.has(product.article)) {
        const quantity = state.cart.get(product.article) + 1;
        state.cart.set(product.article, quantity);
      } else {
        state.cart.set(product.article, 1);
      }
    },
    DELETE_FROM_CART: (state, product) => {
      const quantity = state.cart.get(product.article);

      if (quantity == 1) {
        console.log('delete');
        state.cart.delete(product.article);
      } else {
        state.cart.set(product.article, quantity - 1);
      }
    },
  },
  actions: {
    GET_PRODUCTS_FRON_API({ commit }) {
      return axios("http://localhost:3000/products", {
        method: "GET"

      })
        .then((products) => {
          commit('SET_PRODUCTS_TO_STATE', products.data)
          return products
        })
        .catch((error) => {
          console.log(error);
          return error;
        })
    },
    ADD_TO_CART({ commit }, product) {
      commit("ADD_TO_CART", product)
    },
    DELETE_FROM_CART({ commit }, product) {
      commit("DELETE_FROM_CART", product)
    }
  },
  modules: {
  }
})
