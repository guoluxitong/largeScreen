<template>
  <div class="header">
    <span class="title">山东简洁软件有限公司</span>
    <div class="right-menu">
      <span class="employee-info"><span v-if="organizationName">组织：{{organizationName}}</span>&nbsp;&nbsp;<span v-if="realName">姓名：{{realName}}</span>&nbsp;&nbsp;</span>
      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">设置<i class="el-icon-caret-bottom"></i> </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item divided>
            <span @click="handleUpdatePassWord" style="display:block;">修改密码</span>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <span @click="changeInfo" style="display:block;">修改个人信息</span>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <span @click="logout" style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="30%">
      <el-form :model="passWordChangeFormData" :rules="rules" ref="passWordChangeForm" label-width="90px"  style='width: 90%; margin-left:15px;' label-position="right">
        <el-form-item label="原密码" prop="oldPassWord">
          <el-input type="password"  v-model="passWordChangeFormData.oldPassWord" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassWord">
          <el-input type="password" v-model="passWordChangeFormData.newPassWord" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码确认" prop="checkNewPassWord">
          <el-input type="password" v-model="passWordChangeFormData.checkNewPassWord" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :offset="10" :span="8">
            <el-button type="primary" @click="submitForm">确认</el-button>
            </el-col>
            <el-col :span="4">
            <el-button icon="el-icon-back" type="warning" @click="cancel ">取消</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="修改个人信息" :visible.sync="changeInfoFormVisible" width="30%">
      <el-form :model="userInfo" :rules="rules" ref="userInfoChangeForm" label-width="90px"  style='width: 90%; margin-left:15px;' label-position="right">
        <el-form-item label="名称" prop="name">
          <el-input   v-model="userInfo.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="编号" prop="deviceNo">
          <el-input  v-model="userInfo.deviceNo" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="deviceType">
          <el-input  v-model="userInfo.deviceType" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-row>
            <el-col :offset="10" :span="8">
              <el-button type="primary" @click="">确认</el-button>
            </el-col>
            <el-col :span="4">
              <el-button icon="el-icon-back" type="warning" @click="cancelChange ">取消</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import {editEmployee} from '@/api/employee'
  import ElRow from "element-ui/packages/row/src/row";
  export default {
    components: {
      ElRow
    },
    data(){
      let validateOldPassWord = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入原始密码'));
        }else {
          if (value != this.$store.state.user.token.password) {
            callback(new Error("原始密码输入不正确"));
          }
          callback();
        }
      };
      let validateNewPassWord = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入新密码'));
        } else {
          if (this.passWordChangeFormData.checkNewPassWord !== '') {
            this.$refs.passWordChangeForm.validateField('checkNewPassWord');
          }
          callback();
        }
      };
      let validateCheckNewPassWord = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.passWordChangeFormData.newPassWord) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      }
      return{
        realName: this.$store.state.user.token.realName,
        organizationName:this.$store.state.user.token.organizationName,
        dialogFormVisible:false,
        changeInfoFormVisible:false,
        userInfo: {
          name: '',
          deviceNo: '',
          deviceType: ''
        },
        passWordChangeFormData: {
          oldPassWord:'',
          newPassWord: '',
          checkNewPassWord: ''
        },
        rules: {
          oldPassWord: [{trigger: 'blur',validator: validateOldPassWord}],
          newPassWord: [{ trigger: 'blur',validator: validateNewPassWord}],
          checkNewPassWord: [{trigger: 'blur',validator: validateCheckNewPassWord}],

        }
      }
    },
    computed: {
      ...mapGetters([
        'sidebar'
      ])
    },
    methods: {
      changeInfo(){
     this.changeInfoFormVisible=true;
      },
      cancelChange(){
        this.changeInfoFormVisible=false
      },
      cancel(){
        this.dialogFormVisible=false
        this.$nextTick(() => {
          this.$refs["passWordChangeForm"].resetFields();
        });
      },
      toggleSideBar() {
        this.$store.dispatch('toggleSideBar')
      },
      handleUpdatePassWord(){
        this.passWordChangeFormData.oldPassWord=''
        this.passWordChangeFormData.newPassWord=''
        this.passWordChangeFormData.checkNewPassWord=''
        this.dialogFormVisible = true
      },
      submitForm() {
        this.$refs.passWordChangeForm.validate(valid => {
          if (valid) {
            editEmployee({password:this.passWordChangeFormData.newPassWord}).then(data=>{
              if(data.data.code==0){
                this.dialogFormVisible = false
                this.$message( {
                  message: '修改成功',
                  type: 'success'
                });
                Promise.all([this.$store.dispatch('LogOut'),this.$store.dispatch('removeRouters'),this.$store.dispatch('delAllViews')]).then(()=>{
                  this.$router.push({ path: '/login' })
                })
              }else{
                this.$message.error(data.data.msg)
              }
            }).catch(()=>{
              this.$message( {
                message: '修改失败',
                type: 'error'
              });
            })
          } else {
            return false
          }
        })
      },
      logout() {
        this.$confirm('确认退出?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          Promise.all([this.$store.dispatch('LogOut'),this.$store.dispatch('removeRouters'),this.$store.dispatch('delAllViews')]).then(()=>{
            this.$router.push({ path: '/login' })
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });
        });
      }
    }

  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color:#2a579a;
    .hamburger-container {
      float: left;
      padding-top:5px;
      padding-left: 10px;
    }
    .title{
      margin-left: 5px;
      font-size: 23px;
      color: white;
    }
    .right-menu {
      font-size: 15px;
      float: right;
      height: 100%;
      line-height:100%;
      .employee-info{
        color: white;
      }
      &:focus{
        outline: none;
      }
      .right-menu-item {
        display: inline-block;
        margin: 0 8px;
      }
      .screenfull {
        height: 20px;
      }
      .international{
        vertical-align: top;
      }
      .theme-switch {
        vertical-align: 15px;
      }
      .avatar-container {
        margin-top: 25px;
        line-height: 23px;
        margin-right: 10px;
        color: white;
        .avatar-wrapper {
          cursor: pointer;
          .el-icon-caret-bottom {
            color: white;
            right: -15px;

          }
        }
      }
    }
  }
</style>
