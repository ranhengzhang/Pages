<template>
    <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
    </ul>
</template>

<script>
export default {
    name: "MyNews",
    beforeDestroy() {
        console.log(1)
    }
}
</script>

<style scoped>

</style>