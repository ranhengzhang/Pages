<template>
  <div>
    <h2 @click="showName">学校名称：{{name}}</h2>
    <h2>学校地址：{{address}}</h2>
  </div>
</template>

<script>
// import {mixin1} from "../mixin"

export default {
  name: 'School',
  data() {
    return {
      // name: 'school name',
      address: 'school address',
    }
  },
  // mixins: [mixin1]
}
</script>

<style>

</style>
