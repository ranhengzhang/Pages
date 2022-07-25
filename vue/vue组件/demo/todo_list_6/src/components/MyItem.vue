<template>
    <li>
        <label>
            <input :checked="todo.done"
                   type="checkbox"
                   @change="handleCheck(todo.id)"/>
            <span v-show="!todo.isEdit">{{ todo.title }}</span>
            <input v-show="todo.isEdit"
                   ref="inputTitle"
                   :value="todo.title"
                   type="text"
                   @blur="handleBlur(todo, $event)">
        </label>
        <button class="btn btn-danger"
                @click="handleDelete(todo.id)">删除
        </button>
        <button class="btn btn-edit"
                @click="handleEdit(todo)"
                v-show="!todo.isEdit">编辑
        </button>
    </li>
</template>

<script>
import pubsub from "pubsub-js";

export default {
    name: "MyItem",
    methods: {
        // 勾选或取消
        handleCheck(id) {
            // 通知App组件将对应todo对象的done值取反
            // this.checkTodo(id);
            this.$bus.$emit('checkTodo', id);
        },
        // 删除
        handleDelete(id) {
            if (confirm('确定删除吗？')) {
                // this.deleteTodo(id);
                // this.$bus.$emit('deleteTodo', id);
                pubsub.publish('deleteTodo', id);
            }
        },
        // 编辑
        handleEdit(todo) {
            // todo.isEdit = true;
            if (todo.hasOwnProperty.call('isEdit')) {
                this.isEdit = true;
            } else {
                this.$set(todo, 'isEdit', true);
            }
            // this.$refs.inputTitle.focus(); # 无效语句，因为vue在执行所有的语句之后才重新解析模板
            this.$nextTick(()=>{
                this.$refs.inputTitle.focus();
            })
        },
        // 失去焦点（真正执行修改逻辑）
        handleBlur(todo, event) {
            todo.isEdit = false;
            if (!event.target.value.trim()) return alert('输入不能为空！');
                this.$bus.$emit('updateTodo', todo.id, event.target.value);
        }
    },
    props: ['todo']
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