<template>
  <div>
    <el-menu
      mode="horizontal"
      :default-active="activeIndex"
      background-color="#545c64"
      text-color="#fff"
      router
      active-text-color="#ffd04b"
      class="el-menu-demo"
    >
      <el-menu-item index="1" route="/">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">小程序</template>
        <el-menu-item index="2-1" route="/miniapps/TigerLottery">老虎机抽奖</el-menu-item>
        <el-menu-item index="2-2" route="/miniapps/NumLottery">数字抽奖</el-menu-item>
        <el-menu-item index="2-3" route="/miniapps/NodePad">记事本</el-menu-item>
      </el-submenu>
      <el-submenu index='3'>
        <template slot="title">组件</template>
        <el-menu-item index="3-1" route="/Login">登录</el-menu-item>
      </el-submenu>
      <el-submenu index='4'>
        <template slot="title">CSS应用技巧</template>
        <el-menu-item index="4-1">底部固定</el-menu-item>
        <el-menu-item index="4-2">背景图片视差</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
  }
}
</script>
<style>
</style>
