<template>
  <div id="TigerLottery">
    <TopNav/>
    <div id="playBigBox">
      <div v-for="item in 3" :key="item" class="playBox">
        <ul class="playBoxUl">
          <li v-for="(resultList,index) in resultList" :key="index">{{resultList}}</li>
        </ul>
      </div>
    </div>
    <div id="TigerLotteryBtn"><el-button type="primary" @click="begin">开始抽奖</el-button></div>
    <br>
    <hr>
    <div id="TigerResChangeBox">
      <div id="TigerChangeNum">
        <el-input placeholder="请输入3位数字" v-model="putnum" maxlength=3 minlength=3 ></el-input>
      </div>
      <el-button type="success" round id="TigerChangeBtn" @click="TigerChangeNum">更改结果</el-button>
    </div>
    <br>
    <p>如果想要更改最终结果，请在上面输入框中输入3位数字， 当前最终结果为 <span style="color:#da1414"> {{res[0]}} {{res[1]}} {{res[2]}}</span></p>
  </div>
</template>

<script>
import TopNav from '@/component/TopNav'
import $ from 'jquery'
export default {
  components: {
    TopNav
  },
  data () {
    return {
      resultList: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9
      ], // 转动的圈数是根据转动列表中的组数来定的，比如此时组数为6 ，那么转动的圈数就为5，还有一组为结果数组 如果需要圈数增大，就添加组数即可
      res: [8, 8, 8],
      putnum: null
    }
  },
  methods: {
    begin () {
      let _this = this
      $('.playBoxUl').each( // 为每组抽奖列表添加此方法， 设置定时器已达到一个时差的效果
        function (index) {
          let _num = $(this)
          setTimeout(function () { // 设置定时器 时差效果
            _num.animate({ // 设置动画
              marginTop: -(5 * 800 + _this.res[index] * 80) + 'px' // 需要转动的距离 5*80*10是根据框大小计算的圈数 5为圈数 800为一圈的距离 而后面的是根据需要转到的具体位置而取的列表
            },
            {
              duration: 6999 // 完成动画所用的时间
            })
          }, 300 * index) // 每一组转动的时差 时差效果
        }
      )
    },
    TigerChangeNum () {
      let _this = this
      let pasNum = Number(_this.putnum)
      let pasStr = String(pasNum)
      if (pasStr === 'NaN') {
        console.log('不是一个数字')
        _this.putnum = ''
      } else {
        console.log(pasStr + '是一个数字')
        let resNum = pasStr.split('')
        console.log(resNum.length)
        if (resNum.length !== 3) {
          _this.putnum = ''
          alert('请输入3位数字')
        } else {
          for (let i = 0; i < 3; i++) {
            _this.res.splice(i, 1, resNum[i])
            this.putnum = ''
          }
        }
      }
    }
  },
  created () {
    this.$store.commit('ChangeTopTitle', '老虎机抽奖')
  }
}
</script>

<style>
#TigerLottery {
  margin-top: 60px;
}

#playBigBox {
  overflow: hidden;
  width: 200px;
  margin: 0 auto;
}
.playBox {
  float: left;
  height: 80px;
}

.playBoxUl {
  margin-left: 20px;
  width: 20px;
}

.playBoxUl li {
  height: 80px;
  line-height: 80px;
  text-align: center;
  width: 85px;
  font-size: 30px;
}
#TigerResChangeBox {
  overflow: hidden;
}
#TigerLotteryBtn {
  margin-top: 20px;
  text-align: center;
}

#TigerChangeNum {
  width: 200px;
  float: left;
  margin-left: 20px;
}

#TigerChangeBtn {
  float: left;
  margin-left: 30px;
}
</style>
