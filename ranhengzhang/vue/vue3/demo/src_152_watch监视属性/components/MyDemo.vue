<template>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum++">点我+1</button>
    <hr>
    <h2>当前的信息为：{{msg}}</h2>
    <button @click="msg += '❀'">修改信息</button>
    <hr>
    <h2>姓名：{{person.name}}</h2>
    <h2>年龄：{{person.age}}</h2>
    <h2>薪资：{{person.job.salary}}</h2>
    <button @click="person.name += '~'">修改姓名</button>
    <button @click="person.age++">修改年龄</button>
    <button @click="person.job.salary++">修改薪资</button>
</template>

<script>
import {computed, reactive, ref, watch} from "vue";

export default {
    name: "MyDemo",
    setup() {
        let sum = ref(0);
        let msg = ref('洋葱');
        let person = reactive({
            name: '洋葱',
            age: 30,
            job: {
                salary: 20
            }
        })

        // 监视属性
        // region 监视ref所定义单个的响应式数据
        // watch(sum, (newValue, oldValue)=>{
        //     console.log("sum changed", newValue, oldValue);
        // }, {immediate: true, deep: true});
        // endregion

        // region 监视ref所定义的多个响应式数据
        // watch([sum, msg], ([newSum, newMsg], [oldSum, oldMsg])=>{
        //     console.log('sum or msg changed', newSum, newMsg, oldSum, oldMsg);
        // });
        // endregion

        // region 监视reactive所定义的一个响应式数据
        // watch(person, (newValue, oldValue)=>{
        //     console.log('person changed', newValue, oldValue);
        // }, {deep: false});
        // endregion

        // region 监视reactive所定义的一个响应式数据的某一个属性
        // watch(()=>person.name, (newValue, oldValue)=>{
        //     console.log('person.name changed', newValue, oldValue);
        // });
        // endregion

        // region 监视reactive所定义的一个响应式数据中的一个引用类型
        // watch(()=>person.job, (newValue, oldValue)=>{
        //     console.log('job changed', newValue, oldValue);
        // }, {deep: true});
        // endregion

        return {
            sum,
            msg,
            person,
        }
    }
}
</script>

<style scoped>

</style>