<template>
    <div class="container">
        <MyCategory title="美食" :listData="foods">
            <template v-slot:center>
                <img
                    src="http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1312/11/c0/29510695_29510695_1386708897121.jpg">
            </template>
            <template v-slot:footer>
                <a href="https://www.bh3.com/">崩坏三</a>
            </template>
        </MyCategory>
        <MyCategory title="游戏" :listData="games">
            <template v-slot:footer>
                <div class="foot">
                    <a href="https://www.bh3.com/">崩坏三</a>
                    <a href="https://www.bh3.com/">崩坏：星穹铁道</a>
                </div>
            </template>
        </MyCategory>
        <MyCategory title="电影" :listData="films">
            <template v-slot:center>
                <video src="https://www.runoob.com/try/demo_source/movie.mp4" controls></video>
            </template>
            <template v-slot:footer>
                <a href="https://www.bh3.com/">崩坏：星穹铁道</a>
                <h4>欢迎前来观看</h4>
            </template>
        </MyCategory>
    </div>
</template>

<script>
import MyCategory from "@/components/NamedCategory";

export default {
    name: "NamedSlot",
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