<template>
  <div id="NumLottery">
    <TopNav/>
    <br>
    <div>
      <ul id="numListBox">
        <li v-for="(num,index) in numList" :key="index" class="numBox">{{num}}</li>
      </ul>
      <div id="numLotteryBtn"><el-button type="primary" @click="begin">开始抽奖</el-button></div>
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
      numList: [0, 0, 0, 0, 0], // 初始状态
      resList: [8, 8, 8, 8, 8] // 最终结果
    }
  },
  created () {
    this.$store.commit('ChangeTopTittle', '数字抽奖')
  },
  methods: {
    begin () {
      let _this = this
      let Randnum
      let timer = setInterval(function () { // 设置定时器，循环将随机产生的数字替换掉numList数组中的数字，达到动画效果
        for (let i = 0; i < 5; i++) {
          Randnum = parseInt(Math.random() * 10) // 随机产生0-9数字
          _this.numList.splice(i, 1, Randnum) // 替换numList数组中第i位数字
        }
      }, 50)
      setTimeout(function () { // 设置定时器，清除上面的定时器效果然后抛出结果
        clearInterval(timer) // 清除定时器timer
        for (let i = 0; i < 5; i++) {
          _this.numList.splice(i, 1, _this.resList[i]) // 将最终结果替换
        }
      }, 5000)
    }
  }
}
</script>

<style>
#NumLottery {
  margin-top: 60px;
}

#numListBox {
  width: 250px;
  overflow: hidden;
  margin: 0 auto;
}

.numBox {
  float: left;
  width: 50px;
  text-align: center;
  font-size: 30px;
}

#numLotteryBtn {
  width: 250px;
  margin: 0 auto;
  margin-top: 20px;
  text-align: center;
}
</style>
