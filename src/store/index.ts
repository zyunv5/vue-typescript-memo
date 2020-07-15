import Vue from "vue";
import Vuex from "vuex";
import ActionHelper from "./ActionHelper"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title:'ts+vue',
    aHelper:new ActionHelper(),
  },
  mutations: {
    
  },
  actions: {},
  modules: {}
});