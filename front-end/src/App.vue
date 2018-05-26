<template>
    <el-container>
        <el-header>
            <el-menu :default-active="activeIndex"  mode="horizontal" @select="handleSelect">
                <el-menu-item index="1" @click="index" >Votewaifu.club</el-menu-item>
                <el-menu-item index="2" @click="createVote" style="float: right">发起投票</el-menu-item>
                <el-menu-item index="3" @click="login" style="float: right" v-if="!this.$store.state.token" >用户登录</el-menu-item>

            </el-menu>
        </el-header>
        <el-main>
            <transition name="el-fade-in">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </transition>

        </el-main>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
        }
    },
    methods: {
        login () {
            this.$router.push({name:'login'});
        },
        index () {
            this.$router.push({name:'mainPage'});
        },
        createVote () {
            this.$router.push({name:'votePage'});
        },
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },

  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
.el-header, .el-footer {
    background-color: #ffffff;
    color: #333;
    text-align: left;
    line-height: 60px;
}

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
}
.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
/*.el-main {*/
    /*background-color: #E9EEF3;*/
    /*color: #333;*/
    /*text-align: center;*/
    /*line-height: 160px;*/
/*!*}*!*/
/*.btn-right {*/
    /*text-align: right;*/
/*}*/

.no-mode-translate-demo-wrapper {
    position: relative;
    height: 18px;
}
.no-mode-translate-demo-wrapper button {
    position: absolute;
}
.no-mode-translate-fade-enter-active, .no-mode-translate-fade-leave-active {
    transition: all 1s;
}
.no-mode-translate-fade-enter, .no-mode-translate-fade-leave-active {
    opacity: 0;
}
.no-mode-translate-fade-enter {
    transform: translateX(31px);
}
.no-mode-translate-fade-leave-active {
    transform: translateX(-31px);
}

</style>
