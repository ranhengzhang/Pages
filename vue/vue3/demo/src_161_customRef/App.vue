<template>
    <input type="text" v-model="keyWord">
    <h3>{{keyWord}}</h3>
</template>

<script>
import {customRef, ref} from "vue";

export default {
    name: 'App',
    components: {},
    setup() {
        // let keyWord = ref('hello'); // 使用Vue提供的内置ref

        function myRef(value, delay) {
            return customRef((track, trigger)=>{
                let timer;
                return {
                    get() {
                        console.log('myRef get...', value);
                        track();
                        return value;
                    },
                    set(newValue) {
                        clearTimeout(timer)
                        timer = setTimeout(()=>{
                            value = newValue;
                            trigger();
                        }, delay);
                        console.log('myRef set...', newValue);
                    },
                }
            })
        }
        let keyWord = myRef('hello', 500); // 使用程序员自定义的ref

        return {
            keyWord,
        }
    },
}
</script>

<style>

</style>
