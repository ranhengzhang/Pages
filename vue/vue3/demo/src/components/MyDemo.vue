<template>
    <h1>一个人的信息</h1>
    姓：<input type="text" v-model="person.lastName"><br>
    名：<input type="text" v-model="person.firstName"><br>
    全名：<input type="text" v-model="person.fullName"><br>
</template>

<script>
import {computed, reactive} from "vue";

export default {
    name: "MyDemo",
    setup() {
        let person = reactive({
            lastName: '道梅',
            firstName: '崔得',
        });

        // 计算属性
        // region 简写
        // person.fullName = computed(()=>{
        //     return person.lastName + '・' + person.firstName;
        // })
        // endregion
        person.fullName = computed({
            get() {
                return person.lastName + '・' + person.firstName;
            },
            set(value) {
                const nameArr = value.split('・');
                person.lastName = nameArr[0];
                person.firstName = nameArr[1];
            }
        })

        return {
            person,
        }
    }
}
</script>

<style scoped>

</style>