<template>
  <div id="regist">
    <TopNav/>
    <div id="registBox-1">
      <el-form label-width="80px" :model="formData" :rules="rules" label-position="left" ref="rulecleanRef">
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
        <el-button type="primary" @click="registOne">注册</el-button>
        <el-button type="warning" @click="cleanOne">清空</el-button>
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
    var CheackPhone = (rule, value, callback) => {
      if (isNaN(value)) {
        callback(new Error('请输入正确的电话号码'))
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
          {required: true, message: '用户名不能为空', trigger: 'blur'}, // trigger: 'blur' 代表鼠标在失去焦点后验证
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        pass: [
          {required: true, message: '请密码不能为空', trigger: 'blur'},
          {min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '邮箱不能不为空', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱', trigger: 'blur'}
        ],
        phone: [
          {required: true, message: '手机号不能为空', trigger: 'blur'},
          {len: 11, message: '请输入正确的11位电话号码', trigger: 'blur'} // len和min max 不同  len 代表只能是这个长度位数，代表length
        ]
      },
      rules2: {
        user2: [
          {required: true, message: '用户名不能为空', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        pass2: [
          {required: true, message: '密码不能为空', trigger: 'blur'},
          { validator: CheackPass, trigger: 'blur' }, // 此处对应的就是自定义的表单验证方法，由此看出，自身的验证方法依然有效，只要按照标准添加一项新的就可以了
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
          {len: 11, message: '请输入正确的11位电话号码', trigger: 'blur'},
          { validator: CheackPhone, trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.$store.commit('ChangeTopTittle', '注册')
  },
  methods: {
    registOne () {
      let _this = this
      // 线验证表单是否通过， 再输出已通过的验证结果
      // 还是先获取实力对象 ，通过方法elementUI的validate 来验证
      _this.$refs.rulecleanRef.validate(function (valid) {
        if (valid !== true) {
          alert('请正确填写您的信息后再进行注册')
        } else {
          alert(
            '恭喜您，注册成功 ' + '\n' +
            '您的用户名为:' + _this.formData.user + '\n' +
            '您的密码为:' + _this.formData.pass + '\n' +
            '您的email为:' + _this.formData.email + '\n' +
            '您的号码为:' + _this.formData.phone + '\n'
          )
          _this.$refs.rulecleanRef.resetFields() // 验证成功后重置表单
        }
      })
    },
    cleanOne () { // 表单重置
      console.log(this)
      this.$refs.rulecleanRef.resetFields() // element 表单重置方法， 要先设置一个实力对象  ，表单上设置 ref = "rulecleanRef"
    }
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

</style>
