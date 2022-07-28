<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <!-- 定义一个插槽 -->
        <slot name="center">
            <ul>
                <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
            </ul>
        </slot>
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    name: "MyCategory",
    props: ['title', 'listData']
}
</script>

<style scoped>
.category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
}

h3 {
    text-align: center;
    background-color: orange;
}
</style>