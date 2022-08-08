<template>
    <ul>
        <!--        <li>消息编号：{{$route.query.id}}</li>-->
        <!--        <li>消息标题：{{$route.query.title}}</li>-->
        <li>消息编号：{{ id }}</li>
        <li>消息标题：{{ title }}</li>
        <!--        <li>{{a}}</li>-->
        <!--        <li>{{b}}</li>-->
    </ul>
</template>

<script>
export default {
    name: "MyDetail",
    // props: ['a', 'b'],
    props: ['id', 'title']
}
</script>

<style scoped>

</style>