<template>
  <div>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      // name: 'student name',
      sex: 'student sex'
    }
  },
}
</script>

<style>

</style>
