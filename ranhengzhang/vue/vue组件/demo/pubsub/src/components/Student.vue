<template>
    <div class="student">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <button @click="sendStudentName">把学生名给School组件</button>
    </div>
</template>

<script>
import pubsub from "pubsub-js";

export default {
    name: 'Student',
    data() {
        return {
            name: 'student name',
            sex: 'student sex'
        }
    },
    methods: {
        sendStudentName() {
            // this.$bus.$emit('macabaca', this.name);
            pubsub.publish('macabaca', '乆乆乆', 251);
        }
    }
}
</script>

<style lang="less" scoped>
.student {
    background-color: pink;
    padding: 5px;
    margin-top: 30px;
}
</style>
