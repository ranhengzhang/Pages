<template>
    <div>
        <ul>
            <li v-for="message in messageList" :key="message.id">
<!--                <router-link :to="`/home/message/detail?id=${message.id}&title=${message.title}`">{{message.title}}</router-link>&nbsp;&nbsp;-->
                <router-link :to="{
                    path: '/home/message/detail',
                    query: {
                        id: message.id,
                        title: message.title,
                    },
                }">{{message.title}}</router-link>&nbsp;&nbsp;
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
}
</script>

<style scoped>

</style>