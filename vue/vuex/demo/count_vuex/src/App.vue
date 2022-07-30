<template>
    <div>
        <MyCount/>
        <hr/>
        <MyPerson/>
    </div>
</template>

<script>
import MyCount from "@/components/MyCount";
import MyPerson from "@/components/MyPerson";
export default {
    name: 'App',
    components: {MyPerson, MyCount}
}
</script>

<style>

</style>
