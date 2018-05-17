<template>
    <div style="width:80%;margin-left: auto;margin-right: auto;" v-loading=loading  element-loading-spinner="el-icon-loading"  element-loading-background="rgba(0, 0, 0, 0.8)" element-loading-text="拼命加载中">
        <el-collapse v-model="activeNames" >
             <el-collapse-item v-for="(animationDayGroup,key) in animationData" :key="key"  :title="dayName[key]"  
             :name= "calName[key]" >
                <el-row type="flex" justify="center" style="flex-wrap: wrap;vertical-align:bottom;">

                 <el-col :span="3" v-for="animate in animationDayGroup" :key="animate.id" :offset="1" style="margin:23px;position:relative">
                    <el-card :body-style="{ padding: '0px' }" shadow="always" style="height:100% ">
                    <img src="./assets/123.jpg" class="image">
                    <div style="padding: 8px;" >
                        <span>{{animate.titleTranslate}}</span>
                        <span v-if="animate.language==='zh-Hans'">国语</span>
                    </div>
                    <div class="bottom clearfix" style="position:absolute;bottom:0;right:5px">
                            <i  class="el-icon-star-off" ></i>
                        </div>
                     
                </el-card>
            </el-col>
        </el-row>
        </el-collapse-item>
        </el-collapse>
    </div>
    
</template>

<script>
    import axios from './axios.js'
    export default {
        data() {
            return {
                animationData :[],
                loading: false,
                activeNames:['1','2','3','4','5','6','7'],
                calName:['1','2','3','4','5','6','7'],
                dayName:['星期一','星期二','星期三','星期四','星期五','星期六','星期日']
            }
        },
        created () {
          this.fetchData()
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            //'$route': 'fetchData'
        },
        methods:{
            async fetchData() {
                this.loading = true;
                let dataReceived = await axios.get('/api/mainPage',{
                });
                this.loading = false;
                console.log(this)
                this.animationData = this.getdataByDay(dataReceived.data)

            },
            getdataByDay (animationData) {
                var dataByDay = Array.apply(undefined,{length:7}).map(()=>{return []});
                console.log(animationData)
                for (let animation of animationData) {
                    if (animation.day) {
                        dataByDay[animation.day].push(animation)
                    }
                }
                console.log(dataByDay);
                return dataByDay;
            }

        }
    }

</script>

<style scoped>
    body {
        /* margin: 0; */
    }
</style>