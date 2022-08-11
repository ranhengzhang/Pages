<template>
    <div class="school">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
    </div>
</template>

<script>

export default {
    name: 'School',
    data() {
        return {
            name: 'school name',
            address: 'school address',
        }
    },
    mounted() {
        this.$bus.$on('macabaca', (data)=>{
            console.log(data);
        });
    },
    beforeDestroy() {
        this.$bus.$off('macabaca');
    }
}
</script>

<style scoped>
.school {
    background-color: skyblue;
    padding: 5px;
}
</style>
