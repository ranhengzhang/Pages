<template>
    <h1>一个人的信息</h1>
    <h3>姓名：{{name}}</h3>
    <h3>年龄：{{age}}</h3>
    <h3>工作种类：{{job.type}}</h3>
    <h3>工作薪水：{{job.salary}}</h3>
    <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import {h, ref} from "vue";

export default {
    name: 'App',
    setup() {
        // 配置data
        let name = ref('john');
        let age = ref(30);
        let job = ref({
            type: '前端工程师',
            salary:'3k'
        });

        function changeInfo() {
            name.value = 'Mary';
            age.value = 18;
            job.value.type = '洋葱'
            job.value.salary = '￥0.95/斤'
        }
        
        return {
            name,
            age,
            job,
            changeInfo,
        }

        // 返回一个渲染函数
        // return ()=>{return h('h1', '玛卡巴卡')}
    },
}
</script>

<style>

</style>
