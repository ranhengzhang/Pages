<template>
    <button @click="showDemo = !showDemo">切换 隐藏/显示</button>
    <MyDemo v-if="showDemo"/>
    <MyTest/>
</template>

<script>
import MyDemo from "@/components/MyDemo";
import {ref} from "vue";
import MyTest from "@/components/MyTest";

export default {
    name: 'App',
    components: {MyTest, MyDemo},
    setup(){
        let showDemo = ref(true);

        return {
            showDemo,
        }
    },
}
</script>

<style>

</style>
