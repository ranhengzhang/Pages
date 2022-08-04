<template>
    <h2>当前求和为：{{sum}}</h2>
    <button @click="sum++">点我+1</button>
</template>

<script>
import {
    computed,
    onBeforeMount,
    onBeforeUnmount,
    onBeforeUpdate,
    onMounted, onUnmounted,
    onUpdated,
    reactive,
    ref,
    watch,
    watchEffect
} from "vue";

export default {
    name: "MyDemo",
    setup() {
        console.log('setup');

        let sum = ref(0);

        onBeforeMount(()=>{
            console.log('onBeforeMount');
        });

        onMounted(()=>{
            console.log('onMounted');
        });

        onBeforeUpdate(()=>{
            console.log('onBeforeUpdate');
        });

        onUpdated(()=>{
            console.log('onUpdated');
        });

        onBeforeUnmount(()=>{
            console.log('onBeforeUnmount');
        });

        onUnmounted(()=>{
            console.log('onUnmounted');
        });

        return {
            sum,
        };
    }
}
</script>

<style scoped>

</style>