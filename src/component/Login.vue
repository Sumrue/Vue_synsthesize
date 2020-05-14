<template>
  <div id="Login">
    <TopNav/>
    <div id="formBox">
      <el-form :model="formData">
        <el-form-item>
          <el-input prefix-icon="el-icon-user" type="text" v-model="formData.user" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input prefix-icon="el-icon-lock" v-model="formData.password" show-password type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div id="loginBtn">
        <el-button type="primary" @click="login">登录</el-button>
        <el-button type="success" id="regist" @click="regist">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from '@/component/TopNav'
export default {
  components: {
    TopNav
  },
  created () {
    this.$store.commit('ChangeTopTittle', '登录组件')
  },
  data () {
    return {
      formData: {
        user: '',
        password: ''
      }
    }
  },
  methods: {
    login () { // 登录按钮，发送登录信息
      let _this = this
      if (_this.formData.user !== '' && _this.formData.password !== '') { // 首先判断用户名或者密码不能为空
        alert('登录成功')
        _this.formData.user = ''
        _this.formData.password = ''
      } else {
        alert('用户名或者密码不能为空')
        _this.formData.password = ''
      }
    },
    regist () { // 注册
      this.$router.push('/regist')
    }
  }
}
</script>

<style>
#Login {
  margin-top: 60px;
  padding-top: 60px;
}

#formBox {
  width: 30%;
  margin: 0 auto;
}

#regist {
  float: right;
}

#loginBtn {
  padding: 0 10px;
}

@media screen and (max-width: 800px) {
  #formBox {
    width: 50%
  }
}

@media screen and (max-width: 400px) {
  #formBox {
    width: 70%
  }
}
</style>
