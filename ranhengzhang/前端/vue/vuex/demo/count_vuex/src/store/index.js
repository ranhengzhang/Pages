// 该文件用于创建vuex中最为核心的store

import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex)

import countOptions from "./count";
import peopleOptions from "./people";



// 创建并暴露store
export default new Vuex.Store({
    modules: {
        countOptions,
        peopleOptions
    }
})