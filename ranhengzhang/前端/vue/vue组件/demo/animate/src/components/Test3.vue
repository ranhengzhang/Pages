<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
<!--        <transition name="igubigu">-->
<!--            <h1 v-show="isShow">你好啊！</h1>-->
<!--        </transition>-->
        <transition-group name="animate__animated animate__bounce"
                          enter-active-class="animate__swing"
                          leave-active-class="animate__backOutUp"
                          appear>
            <h1 v-show="isShow" key="1">你好啊！</h1>
            <h1 v-show="!isShow" key="2">你好啊！</h1>
        </transition-group>
    </div>
</template>

<script>
import 'animate.css'

export default {
    name: "Test3",
    data() {
        return {
            isShow: true,
        }
    },
}
</script>

<style scoped>
h1 {
    background-color: orange;
}


</style>