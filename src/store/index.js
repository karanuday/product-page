import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
  },
  mutations: {
    updateImageList: (state, val = []) => {
      state.images = val;
    },
  },
  getters: {
    getRandomImage: (state) => () => {
      const random = parseInt(((Math.random() * 25) + 5) % 25);
      console.log('INSIDE GETTER', random, state.images[random]);
      return state.images[random] ? state.images[random].url : '';
    },
  },
  actions: {
    fetchImages: async (ctx) => {
      const { data: images } = await axios.get('https://anatta-demo-app.herokuapp.com/api/images');
      ctx.commit('updateImageList', images);
    },
  },
  modules: {
  },
});
