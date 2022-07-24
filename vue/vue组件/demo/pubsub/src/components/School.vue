<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name: 'School',
    data() {
        return {
            name: 'school name',
            address: 'school address',
        }
    },
    mounted() {
        // this.$bus.$on('macabaca', (data)=>{
        //     console.log(data);
        // });
        this.pubId = pubsub.subscribe('macabaca', function (msgName, data) {
            console.log('有人发布了「玛卡巴卡」消息，「玛卡巴卡」消息的回调执行了', msgName, data);
        });
    },
    beforeDestroy() {
        // this.$bus.$off('macabaca');
        pubsub.unsubscribe(this.pubId);
    }
}
</script>

<style scoped>
.school {
    background-color: skyblue;
    padding: 5px;
}
</style>
