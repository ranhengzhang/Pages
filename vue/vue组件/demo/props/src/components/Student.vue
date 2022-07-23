<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生姓名：{{name}}</h2>
    <h2>学生性别：{{sex}}</h2>
    <h2>学生年龄：{{myAge}}</h2>
    <button @click="myAge++">加一岁</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      msg: 'student message',
      myAge: this.age + 1
    }
  },
  props: ['name', 'sex', 'age']
  // (1) props: ['name', 'sex', 'age'] # 简单声明接收
  
  // (2)
  // props: {
  //   name: String,
  //   sex: String,
  //   age: Number
  // } # 接收的同时对类型进行限制

  // 加上默认值的指定和必要性的限制
  // props: {
  //   name: {
  //     type: String, // 类型是字符串
  //     required: true // 该属性是必要的
  //   },
  //   age: {
  //     type: Number, // 类型是数字
  //     default: 999 // 默认值999
  //   },
  //   sex: {
  //     type: String,
  //     required: true,
  //   }
  // }
}
</script>

<style>

</style>