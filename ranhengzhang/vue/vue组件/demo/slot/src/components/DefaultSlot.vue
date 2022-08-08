<template>
    <div class="container">
        <MyCategory title="美食" :listData="foods">
            <img
                src="http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1312/11/c0/29510695_29510695_1386708897121.jpg">
        </MyCategory>
        <MyCategory title="游戏" :listData="games"/>
        <MyCategory title="电影" :listData="films">
            <video src="https://www.runoob.com/try/demo_source/movie.mp4" controls></video>
        </MyCategory>
    </div>
</template>

<script>
import MyCategory from "@/components/DefaultCategory";

export default {
    name: "DefaultSlot",
    components: {MyCategory},
    data() {
        return {
            foods: ['火锅', '烧烤', '小龙虾', '牛排'],
            games: ['崩坏三', '原神', '崩坏：星穹铁道', '绝区零'],
            films: ['《第二次崩坏》', '《你好，李焕英》', '《星际争霸》', '《饥饿游戏》'],
        }
    },
}
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-around;
}

img,
video {
    width: 100%;
}
</style>