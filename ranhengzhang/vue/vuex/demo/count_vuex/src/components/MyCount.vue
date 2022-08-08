<template>
<div>
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大10倍为：{{bigSum}}</h3>
    <h3>我在{{school}}，学习{{subject}}</h3>
    <select v-model.number="num">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="incrementOdd(num)">当前求和为奇数再加</button>
    <button @click="incrementWait(num)">等一等再加</button>
    <h3>下方组件的总人数是{{personList.length}}</h3>
</div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from "vuex";

export default {
    name: "MyCount",
    data() {
        return {
            num: 1,
        }
    },
    computed: {
        ...mapState('countOptions', ['sum', 'school', 'subject']),
        ...mapState('peopleOptions', ['personList']),
        ...mapGetters('countOptions', ['bigSum']),
    },
    methods: {
        ...mapMutations('countOptions', {
            increment: 'INCREASE',
            decrement: 'DECREASE'
        }),
        ...mapActions('countOptions', {
            incrementOdd: 'increaseOdd',
            incrementWait: 'increaseWait'
        }),
    },
}
</script>

<style scoped>
button {
    margin-left: 5px;
}
</style>