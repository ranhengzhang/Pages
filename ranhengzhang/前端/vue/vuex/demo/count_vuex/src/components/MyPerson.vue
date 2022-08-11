<template>
<div>
    <h3>上方组件的求和为{{sum}}</h3>
    <h1>人员列表</h1>
    <h3>列表中第一个人的名字是{{firstPersonName}}</h3>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addPersonMa">添加一个ma开头的人</button>
    <button @click="addPersonServer">添加一个来自服务器的人</button>
    <ul>
        <li v-for="person in personList" :key="person.id">{{person.name}}</li>
    </ul>
</div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import {nanoid} from "nanoid";


export default {
    name: "MyPerson",
    data() {
        return {
            name: '',
        }
    },
    computed: {
        ...mapState('countOptions', ['sum']),
        ...mapState('peopleOptions', ['personList']),
        firstPersonName() {
            return this.$store.getters["peopleOptions/firstPersonName"];
        }
    },
    methods: {
        add() {
            const personObj = {
                id: nanoid(),
                name: this.name
            };
            this.$store.commit('peopleOptions/ADD_PERSON', personObj);
            this.name = '';
        },
        addPersonMa() {
            const personObj = {
                id: nanoid(),
                name: this.name
            };
            this.$store.dispatch('peopleOptions/addPersoMa', personObj);
            this.name = '';
        },
        ...mapActions('peopleOptions', ['addPersonServer']),
    },
}
</script>

<style scoped>

</style>