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
import {computed, reactive, ref, watch, watchEffect} from "vue";

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

        // region watch监视属性
        // watch(sum, (newValue, oldValue)=>{
        //     console.log('sum changed', newValue, oldValue);
        // }, {immediate: true});
        // endregion

        // watchEffect
        watchEffect(()=>{
            const x1 = sum.value;
            const x2 = person.job.salary;
            console.log('watchEffect work');
        });

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