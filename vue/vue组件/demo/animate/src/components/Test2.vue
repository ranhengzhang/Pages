<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
<!--        <transition name="igubigu">-->
<!--            <h1 v-show="isShow">你好啊！</h1>-->
<!--        </transition>-->
        <transition-group name="igubigu">
            <h1 v-show="isShow" key="1">你好啊！</h1>
            <h1 v-show="!isShow" key="2">你好啊！</h1>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: "Test2",
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

/* 进入的起点 */
.igubigu-enter,
/* 离开的终点 */
.igubigu-leave-to {
    transform: translateX(-100%);
}

/* 进入的终点 */
.igubigu-enter-to,
/* 离开的起点 */
.igubigu-leave {
    transform: translateX(0);
}

.igubigu-enter-active,
.igubigu-leave-active {
    transition: 1s ease-in-out;
}
</style>