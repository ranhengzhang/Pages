<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  methods: {
    // 勾选或取消
    handleCheck(id) {
      // 通知App组件将对应todo对象的done值取反
      this.checkTodo(id);
    },
    handleDelete(id) {
      if (confirm('确定删除吗？')) {
        this.deleteTodo(id)
      }
    }
  },
  props: ['todo', 'checkTodo', 'deleteTodo']
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: gray;
}

li:hover button {
  display: inline-block;
}
</style>