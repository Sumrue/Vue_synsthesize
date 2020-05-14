<template>
  <div id="regist">
    <TopNav/>
    <div id="registBox-1">
      <el-form label-width="80px" :model="formData" :rules="rules" label-position="left">
        <el-form-item label="用户名" prop="user"> <!--此处的user对应的是formData里的user，但是验证长度确实根据这里的user来验证-->
          <el-input type="text" v-model="formData.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass" >
          <el-input type="password" v-model="formData.pass"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input type="text" v-model="formData.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input type="text" v-model="formData.phone"></el-input>
        </el-form-item>
      </el-form>
      <div>
        <el-button type="primary">注册</el-button>
        <el-button type="warning">清空</el-button>
      </div>
    </div>

    <div id="registBox-2">
      <el-form label-width="80px" :model="formData2" :rules="rules2" label-position="left">
        <el-form-item label="用户名" prop="user2"> <!--此处的user对应的是formData里的user，但是验证长度确实根据这里的user来验证-->
          <el-input type="text" v-model="formData2.user2"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass2" >
          <el-input type="password" v-model="formData2.pass2"></el-input>
        </el-form-item>
        <el-form-item label="验证密码" prop="cheackPass" >
          <el-input type="password" v-model="formData2.cheackPass"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email2">
          <el-input type="text" v-model="formData2.email2"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone2">
          <el-input type="text" v-model="formData2.phone2"></el-input>
        </el-form-item>
      </el-form>
      <div>
        <el-button type="primary">注册</el-button>
        <el-button type="warning">清空</el-button>
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
  data () {
    // 表单自定义验证 在这里只用在了密码的二次检验上，对应在原来基础上的验证方式下
    var CheackPass = (rule, value, callback) => {
      if (this.formData2.pass2 !== '') {
        this.$refs.formData2.validateField('checkPass')
      }
      callback()
    }
    var CheackPass2 = (rule, value, callback) => {
      if (value !== this.formData2.pass2) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      formData: { // 第一个表单数据
        user: '',
        pass: '',
        email: '',
        phone: ''
      },

      formData2: { // 第二个注册表单数据
        user2: '',
        cheackPass: '',
        pass2: '',
        email2: '',
        phone2: ''
      },
      rules: {
        user: [
          {required: true, message: '用户名不能为空', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        pass: [
          {required: true, message: '请密码不能为空', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 6 到 10 个字符', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '邮箱不能不为空', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱', trigger: 'blur'}
        ],
        phone: [
          {required: true, message: '手机号不能为空', trigger: 'blur'},
          {type: 'number', min: 11, max: 11, message: '请输入正确的11位电话号码', trigger: 'blur'}
        ]
      },
      rules2: {
        user2: [
          {required: true, message: '用户名不能为空', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        pass2: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          { validator: CheackPass, trigger: 'blur' },
          {min: 3, max: 5, message: '长度在 6 到 10 个字符', trigger: 'blur'}
        ],
        cheackPass: [
          {required: true, message: '请再次输入密码', trigger: 'blur'},
          { validator: CheackPass2, trigger: 'blur' }
        ],
        email2: [
          {required: true, message: '邮箱不能为空', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱', trigger: 'blur'}
        ],
        phone2: [
          {required: true, message: '手机号不能为空', trigger: 'blur'},
          {type: 'number', min: 11, max: 11, message: '请输入正确的11位电话号码', trigger: 'blur'}
        ]
      }
    }
  },
  created () {
    this.$store.commit('ChangeTopTittle', '注册')
  },
  methods: {
  }
}
</script>

<style>
#regist {
  margin-top: 60px;
  padding-top: 30px;
}

#registBox-1 {
  width: 45%;
  margin: 0 auto;
  margin-bottom: 30px;
  padding: 5px 5px;
  border: 1px solid rgb(194, 182, 182);
}

#registBox-2 {
  width: 45%;
  margin: 0 auto;
  margin-bottom: 30px;
  padding: 5px 5px;
  border: 1px solid rgb(194, 182, 182);
}

#registBox-1 .el-input {
}
</style>
