<template>
  <div class="todo-footer" v-if="total">
    <label>
<!--      <input type="checkbox" :checked="isAll" @change="changeAll"/>-->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  computed: {
    total() {
      return this.todos.length;
    },
    doneTotal() {
      return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
    },
    isAll: {
      get() {
        return this.todos.reduce((pre, todo) => pre & todo.done, Boolean(this.total));
      },
      set(done) {
        // this.changeAllTodo(done);
          this.$emit('changeAllTodo', done);
      }
    }
  },
  methods: {
    // changeAll(event) {
    //   this.changeAllTodo(event.target.checked)
    // }
      clearAll() {
          this.$emit('clearAllTodo');
      }
  },
  props: ['todos'/*, 'changeAllTodo', 'clearAllTodo'*/]
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>