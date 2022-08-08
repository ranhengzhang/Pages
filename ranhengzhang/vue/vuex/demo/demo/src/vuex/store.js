// 该文件用于创建vuex中最为核心的store

import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex)

// 创建actions，用于响应组件动作，统筹收集数据
const actions = {

}

// 创建mutations，是实际上操作数据的地方
const mutations = {

}

// 创建state，用于存储数据
const state = {

}

// 创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})