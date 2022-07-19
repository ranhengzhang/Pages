<template>
  <div>
    <Student name='student name' :age='33' sex='student sex'/>
  </div>
</template>

<script>
import Student from './components/Student.vue'
export default {
  name: 'App',
  components: {Student}
}
</script>

<style>

</style>