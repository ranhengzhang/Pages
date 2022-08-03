<template>
    <h1>一个人的信息</h1>
    <h3>姓名：{{person.name}}</h3>
    <h3>年龄：{{person.age}}</h3>
    <h3>工作种类：{{person.job.type}}</h3>
    <h3>工作薪水：{{person.job.salary}}</h3>
    <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import {h, reactive, ref} from "vue";

export default {
    name: 'App',
    setup() {
        // 配置data
        let person = reactive({
            name: 'john',
            age: 30,
            job: {
                type: '前端工程师',
                salary:'3k',
            },
        });

        function changeInfo() {
            person.name = 'Mary';
            person.age = 18;
            person.job.type = '洋葱';
            person.job.salary = '￥0.95/斤';
        }
        
        return {
            person,
            changeInfo,
        }

        // 返回一个渲染函数
        // return ()=>{return h('h1', '玛卡巴卡')}
    },
}
</script>

<style>

</style>
