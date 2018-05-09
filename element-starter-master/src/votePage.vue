<template>
    <el-row type="flex" justify="center">
        <el-col :span="16">

                    <el-form :model="createVote" :rules="rulesVote" ref="vote-form" status-icon label-width="110px" >
                            <p>创建投票</p>
                        <el-form-item label="投票名称" prop="voteName">
                            <el-input v-model="createVote.voteName"></el-input>
                        </el-form-item>
                        <el-form-item label="投票类型" prop="voteType">
                            <el-radio v-model="createVote.voteType" label="1">追番投票</el-radio>
                            <el-radio v-model="createVote.voteType" label="2">完结投票</el-radio>
                            <el-radio v-model="createVote.voteType" label="3">角色投票</el-radio>
                        </el-form-item>
                        <el-form-item label="番剧类型" prop="animationType">
                            <el-radio v-model="createVote.animationType" label="1">全部</el-radio>
                            <el-radio v-model="createVote.animationType" label="2">仅剧场版</el-radio>
                            <el-radio v-model="createVote.animationType" label="3">TV和OVA</el-radio>
                        </el-form-item>
                        <el-form-item label="番剧开始放送日期范围" prop="startDate">
                            <div class="block">
                                <span class="demonstration"></span>
                                <el-date-picker
                                        v-model="createVote.startDate"
                                        type="daterange"
                                        align="right"
                                        unlink-panels
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期"
                                        :picker-options="pickerOptions">
                                </el-date-picker>
                            </div>
                        </el-form-item>

                        <el-form-item>
                            <el-button type="primary" icon="el-icon-upload" @click="submitVote('vote-form')" style="margin-left:34%;width: 32%">创建投票</el-button>
                        </el-form-item>
                    </el-form>

        </el-col>
    </el-row>
</template>


<script>
    import axios from './axios.js'
    export default {
        data() {
            return {
                createVote: {
                    voteName:'',
                    voteType:'1',
                    animationType:'1',
                    startDate:''
                },
                pickerOptions: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                rulesVote: {
                    voteName: [
                        {required: true, message: '名称不能为空', trigger: 'blur'}
                    ],
                    startDate: [
                        {required: true, message: '日期不能为空', trigger: 'blur'}
                    ]
                },
            }
        },
        watch: {
        },

        methods: {
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
            async submitVote (formName) {
                let valid = await this.validate(formName);
                if (!valid){
                    this.$message('请输入完整信息');
                    return false
                }
                let response = await axios.post('/api/createVote',{

                });
                if (response.status===200) {
                    let token = response.data;

                    this.$store.commit('setToken',token)

                    console.log(this.$store.state.token)
                }
                else{

                }

            },

        }
    }
</script>

<style scoped>

</style>