<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">点我输出上方的dom元素</button>
    <School/>
  </div>
</template>

<script>
import School from './components/School.vue'
export default {
  name: 'App',
  components: {School},
  data() {
    return {
      msg: 'welcome vue'
    }
  },
  methods: {
    showDOM() {
      console.log(this.$refs.title);
    }
  },
}
</script>

<style>

</style>