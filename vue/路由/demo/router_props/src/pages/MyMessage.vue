<template>
    <div>
        <ul>
            <li v-for="message in messageList" :key="message.id">
                <!--                <router-link :to="`/home/message/detail?id=${message.id}&title=${message.title}`">{{message.title}}</router-link>&nbsp;&nbsp;-->
                <!--                <router-link :to="{-->
                <!--                    name: 'igubigu',-->
                <!--                    query: {-->
                <!--                        id: message.id,-->
                <!--                        title: message.title,-->
                <!--                    },-->
                <!--                }">{{message.title}}</router-link>&nbsp;&nbsp;-->
                <!--                <router-link :to="`/home/message/detail/${message.id}/${message.title}`">{{message.title}}</router-link>&nbsp;&nbsp;-->
                <router-link :to="{
                    name: 'igubigu',
                    query: {
                        id: message.id,
                        title: message.title,
                    }
                }">{{ message.title }}
                </router-link>&nbsp;&nbsp;
                <button @click="pushShow(message)">push查看</button>
                <button @click="replaceShow(message)">replace查看</button>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "MyMessage",
    data() {
        return {
            messageList: [
                {
                    id: '001',
                    title: '消息001'
                },
                {
                    id: '002',
                    title: '消息002'
                },
                {
                    id: '003',
                    title: '消息003'
                },
            ],
        }
    },
    methods: {
        pushShow(message) {
            this.$router.push({
                name: 'igubigu',
                query: {
                    id: message.id,
                    title: message.title,
                }
            });
        },
        replaceShow(message) {
            this.$router.replace({
                name: 'igubigu',
                query: {
                    id: message.id,
                    title: message.title,
                }
            })
        },
    },
    beforeDestroy() {
        console.log('1')
    },
}
</script>

<style scoped>

</style>