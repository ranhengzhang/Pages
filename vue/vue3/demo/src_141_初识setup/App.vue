<template>
    <h1>一个人的信息</h1>
    <h1>姓名：{{name}}</h1>
    <h1>年龄：{{age}}</h1>
    <h1>性别：{{sex}}</h1>
    <button @click="sayHello">说话</button>
    <br>
    <button @click="sayWelcome">欢迎</button>
</template>

<script>
import {h} from "vue";

export default {
    name: 'App',
    data() {
        return {
            sex: '男',
        }
    },
    methods: {
        sayWelcome() {
            alert('Welcome');
        },
    },
    // 只是测试setup，不考虑响应式
    setup() {
        // 配置data
        let name = 'john';
        let age = 30;

        // 配置methods
        function sayHello() {
            alert(`name:${name}|age:${age}`)
        }
        
        return {
            name,
            age,
            sayHello
        }

        // 返回一个渲染函数
        // return ()=>{return h('h1', '玛卡巴卡')}
    },
}
</script>

<style>

</style>
