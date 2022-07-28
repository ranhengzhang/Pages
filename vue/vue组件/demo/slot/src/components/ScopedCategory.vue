<template>
    <div class="category">
        <h3>{{ title }}分类</h3>
        <slot :games="games">
        </slot>
    </div>
</template>

<script>
export default {
    name: "MyCategory",
    props: ['title'],
    data() {
        return {
            games: ['崩坏三', '原神', '崩坏：星穹铁道', '绝区零'],
        }
    },
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