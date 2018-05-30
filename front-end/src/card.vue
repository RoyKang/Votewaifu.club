<template>
    <el-card :body-style="{ padding: '0px' }" shadow="always" style="height:100% ">
        <img src="/api/static/123.jpg" class="image">
        <div style="padding: 8px;" >
            <span>{{info.titleTranslate}}</span>
            <span v-if="info.language==='zh-Hans'">国语</span>
        </div>
        <div  class="bottom clearfix" style="position:absolute;bottom:0;right:5px">
            <i  class="el-icon-star-off" ></i>
        </div>
    </el-card>
</template>

<script>
    export default {
        name: "card",
        props: ['info'],

    }
</script>

<style scoped>

</style>