<template>
    <el-row type="flex" justify="center">
        <el-col :span="8">
            <el-tabs type="border-card">
                <el-tab-pane label="登陆" >
                <el-form :model="userLogin" :rules="rulesLogin" ref="login-form" status-icon label-width="80px" label-position="top">
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="userLogin.email"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="userLogin.password" type="password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" icon="el-icon-upload" @click="login('login-form')" style="margin-left:34%;width: 32%">登录</el-button>
                        </el-form-item>
                </el-form>
                </el-tab-pane>
                <el-tab-pane label="注册" >
                    <el-form :model="userRegister" :rules="rulesRegister" ref="submit-form" status-icon label-width="80px" label-position="top">
                        <el-form-item label="邮箱" prop="email">
                            <el-input v-model="userRegister.email"></el-input>
                        </el-form-item>
                        <el-form-item label="用户名" prop="username">
                            <el-input v-model="userRegister.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input v-model="userRegister.password" type="password"></el-input>
                        </el-form-item>
                        <el-form-item >

                            <el-button type="primary" icon="el-icon-upload" @click="register('submit-form')"  style="margin-left:34%;width: 32%">注册</el-button>

                        </el-form-item>
                    </el-form>
                </el-tab-pane>
            </el-tabs>
        </el-col>
    </el-row>
</template>


<script>
    import axios from './axios.js'
    export default {
        data() {
          return {
              userLogin: {
                  email:'',
                  password:'',
              },
              userRegister: {
                  email:'',
                  username:'',
                  password:'',
              },
              rulesLogin: {
                  password: [
                      {required: true, message: '密码不能为空', trigger: 'blur'}
                  ],
                  email: [
                      {required: true, message: '邮箱不能为空', trigger: 'blur'}
                  ]
              },
              rulesRegister: {
                  name: [
                      {required: true, message: '用户名不能为空', trigger: 'blur'}
                  ],
                  password: [
                      {required: true, message: '密码不能为空', trigger: 'blur'}
                  ],
                  email: [
                      {required: true, message: '邮箱不能为空', trigger: 'blur'}
                  ]
              }
        }
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            //this.$router.push({name:'login'})
        },

        methods:{
            validate (formName) {
                let component = this;
                return new Promise(function (resolve,reject) {
                    component.$refs[formName].validate((valid) => {
                    if (valid) {
                        return resolve(true);
                    } else {
                        return resolve(false);
                    }
                    });
                })
            },
            async login (formName) {
                let valid = await this.validate(formName);
                if (!valid){
                    this.$message('请输入完整信息');
                    return false
                }
                let response = await axios.post('/api/login',{
                    data:this.userLogin,
            });
                if (response.data) {
                    let token = response.data;
                    this.$store.commit('setToken',token);
                    this.$message('登陆成功');
                    let url = decodeURIComponent(this.$route.query.redirect || '/') ;
                    this.$router.push({path: url});
                }
                else{
                    this.$message('密码错误');
                }

            },
            async register (formName) {
                let valid = await this.validate(formName);
                if (!valid){
                    this.$message('请输入完整信息');
                    return false
                }
                let response = await axios.post('/api/register',{
                    data:this.userRegister,
                });
                if (response.data === true) {
                    this.$message('注册成功');
                    this.$router.push({name:'mainPage'});
                } else {
                    this.$message('邮箱已经被注册！');
                }

            },

        }
    }
</script>

<style scoped>

</style>