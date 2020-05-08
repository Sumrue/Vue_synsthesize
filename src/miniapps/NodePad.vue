<template>
  <div id="NodePad">
    <TopNav/>
    <br>
    <div>
      <div id="NodeInput"><el-input placeholder="请输入待办事项" v-model="input"></el-input></div>
      <el-button type="success" round id="NodeBtn" @click="doIt">添加待办事项</el-button>
    </div>
    <hr>
    <div id="NodeTodoBox">
      <h2>待办事项</h2>
    <ul>
      <li v-for="(todoList,index) in todoList" :key="index">
        {{todoList}}
        <el-button type="danger" icon="el-icon-delete" circle class="NodeDeleteBtn" @click="deleteTodo(index)"></el-button>
      </li>
    </ul>
    </div>
    <br>
    <br>
    <hr>
    <div id="NodeDelBox">
      <h2>已删除事项</h2>
    <ul>
      <li v-for="(deleteList,item) in deleteList" :key="item">{{deleteList}}</li>
    </ul>
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
    return {
      input: '', // 输入框信息
      todoList: [], // 待办事项列表
      deleteList: [] // 删除项列表
    }
  },
  created () {
    this.$store.commit('ChangeTopTitle', '记事本')
  },
  methods: {
    doIt () { // 点击按钮 添加待办事项
      let _this = this
      if (_this.input === '') { // 添加前先判断待办事项是否为空，为空则不进行
        return false
      } else {
        _this.todoList.push(_this.input) // 添加待办事项到待办事项列表
        _this.input = '' // 添加后置空输入框
      }
    },
    deleteTodo (index) { // 用传参方式将此项要删除项的下标传入
      this.deleteList.push(this.todoList[index]) // 将当前要删除项添加进删除项列表
      this.todoList.splice(index, 1) // 将要删除项从待办事项列表中删除
    }
  }
}
</script>

<style>
#NodePad {
  margin-top: 60px;
}
#NodePad > div {
  overflow: hidden;
}

#NodeInput {
  width: 35%;
  float: left;
  margin-left: 20px;
}

#NodeBtn {
  float: left;
  margin-left: 30px;
}

.NodeDeleteBtn {
  margin-left: 60px;
}

#NodeTodoBox, #NodeDelBox {
  padding: 0 25px;
}

#NodeTodoBox li{
  margin-bottom: 10px;
}

#NodeDelBox li{
  margin-top: 10px;
  text-decoration: line-through
}
</style>
