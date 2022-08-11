<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition appear>
            <h1 v-show="isShow">你好啊！</h1>
        </transition>
        <transition name="igubigu" appear>
            <h1 v-show="!isShow">你好啊！</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name: "Test",
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

.v-enter-active {
    animation: macabaca 1s ease-in-out;
}

.v-leave-active {
    animation: macabaca 1s ease-in-out reverse;
}

.igubigu-enter-active {
    animation: macabaca 1s ease-in-out;
}

.igubigu-leave-active {
    animation: macabaca 1s ease-in-out reverse;
}

@keyframes macabaca {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}
</style>