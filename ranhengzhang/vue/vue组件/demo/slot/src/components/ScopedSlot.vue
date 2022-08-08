<template>
    <div class="container">
        <MyCategory title="游戏">
            <template v-slot:default="{games}"><!-- 解构赋值 -->
                <ul>
                    <li v-for="(item, index) in games" :key="index">{{ item }}</li>
                </ul>
            </template>
        </MyCategory>
        <MyCategory title="游戏">
            <template v-slot:default="source">
                <ul>
                    <li v-for="(item, index) in source.games" :key="index">{{ item }}</li>
                </ul>
            </template>
        </MyCategory>
        <MyCategory title="游戏">
            <template v-slot:default="source">
                <h4 v-for="(item, index) in source.games" :key="index">{{ item }}</h4>
            </template>
        </MyCategory>
    </div>
</template>

<script>
import MyCategory from "@/components/ScopedCategory";

export default {
    name: "ScopedSlot",
    components: {MyCategory}
}
</script>

<style scoped>
.container,
.foot {
    display: flex;
    justify-content: space-around;
}

img,
video {
    width: 100%;
}

h4 {
    text-align: center;
}
</style>