<template>
    <button @click="showDemo = !showDemo">切换 隐藏/显示</button>
    <MyDemo v-if="showDemo"/>
</template>

<script>
import MyDemo from "@/components/MyDemo";
import {ref} from "vue";

export default {
    name: 'App',
    components: {MyDemo},
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
