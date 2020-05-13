<template>
  <div id="CssBottomFixed">
    <TopNav/>
    <main id="CssBottomFixed-main">
      <el-button type="primary" @click="addNum">添加内容</el-button>
      <el-button type="warning" @click="cleanNum">清除内容</el-button>
      <p v-for="(list,index) in list" :key="index">{{index + 1}}</p>
    </main>
    <footer id="CssBottomFixed-footer">
      <h2>我是页面底部</h2>
    </footer>
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
      list: []
    }
  },
  created () {
    this.$store.commit('ChangeTopTittle', 'CSS-底部固定技巧')
  },
  methods: {
    addNum () {
      let _this = this
      let i
      for (i = 0; i < 10; i++) { // 循环10次 将随机数push到list中
        _this.list.push(Math.random())
      }
    },
    cleanNum () {
      this.list.splice(0) // 清空数组list
    }
  }
}
</script>

<style>
#CssBottomFixed {
  display: flex;
  flex-direction: column; /* 主要是这个弹性布局的属性实现此功能 */
  height: 100vh;
}

#CssBottomFixed-main {
  flex: auto;
  margin-top: 80px;
  font-size: 20px;
  text-align: center;
}

#CssBottomFixed-main p {
  margin-bottom: 20px;
}
#CssBottomFixed-footer {
  flex-shrink: 0;
  background: chartreuse;
  text-align: center;
  height: 30px;
  line-height: 30px;
}
</style>
