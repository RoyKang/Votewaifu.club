<template>
    <div style="width:70%;margin-left: auto;margin-right: auto;" v-loading=loading  element-loading-spinner="el-icon-loading"  element-loading-background="rgba(0, 0, 0, 0.8)" element-loading-text="拼命加载中">
        <el-row type="flex" justify="center" style="flex-wrap: wrap;">
            <!--display:inline-block-->
            <el-col :span="3" v-for="animate in animationData"  :offset="1" >
                <el-card :body-style="{ padding: '0px' }" shadow="always">
                    <img src="./assets/123.jpg" class="image">
                    <div style="padding: 14px;">
                        <span>{{  animate.titleTranslate['zh-Hans'] }}</span>
                        <div class="bottom clearfix">
                            <time class="time">{{  }}</time>
                            <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import axios from './axios.js'
    export default {
        data() {
            return {
                animationData :[],
                loading: false
            }
        },
        created () {
          this.fetchData()
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            '$route': 'fetchData'
        },
        methods:{
            async fetchData(){
                this.loading = true;
                let data = await axios.get('/api/mainPage',{
                });
                this.loading = false;
                console.log(data)
                this.animationData = data.data.data;
            }
        }
    }

</script>

<style scoped>
    body {
        margin: 0;
    }
</style>