<template>
  <div>
    <h2 @click="showName">学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
// import {mixin1} from "../mixin"

export default {
  name: 'Student',
  data() {
    return {
      // name: 'student name',
      sex: 'student sex'
    }
  },
  // mixins: [mixin1]
}
</script>

<style>

</style>
