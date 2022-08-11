<template>
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>薪资：{{job.salary}}</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">修改年龄</button>
    <button @click="job.salary++">修改薪资</button>
</template>

<script>
import {computed, reactive, ref, toRef, toRefs, watch, watchEffect} from "vue";

export default {
    name: "MyDemo",
    setup() {
        let person = reactive({
            name: '洋葱',
            age: 30,
            job: {
                salary: 20
            }
        })

        // return {
        //     name: toRef(person, 'name'),
        //     age: toRef(person, 'age'),
        //     salary: toRef(person.job, 'salary'),
        // }
        return {
            ...toRefs(person),
        }
    }
}
</script>

<style scoped>

</style>