<template>
  <div id="CssPicDiff">
    <TopNav/>
    <div id="CssPicDiff-one">
      <p>图片一</p>
    </div>
    <p>----- 哇咔咔 这是一条长长的分哥线 -----</p>
    <div id="CssPicDiff-two">
      <p>图片二</p>
    </div>
    <p>----- 哇咔咔 这是一条长长的分哥线 -----</p>
    <div id="CssPicDiff-three">
      <p>图片三</p>
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
    this.$store.commit('ChangeTopTittle', 'CSS-背景图片视差')
  }
}
</script>

<style>
#CssPicDiff {
  margin-top: 60px;
}

#CssPicDiff p {
  text-align: center;
}

#CssPicDiff-one {
  background-attachment: fixed; /* 主要是通过给背景图片加上此CSS属性来产生的视差效果 */
  background-image: url('../assets/images/6a63f6246b600c334c3e91cb1e4c510fd9f9a16a.jpg');
  background-size: cover;
  height: 100vh;
  text-align: center;
  color: rgb(196, 15, 15);
}

#CssPicDiff-two {
  background-attachment: fixed;
  background-image: url('../assets/images/1103111625a0f59f9afb32be51.jpg');
  height: 100vh;
  background-size: cover;
  color: rgb(196, 15, 15);
}

#CssPicDiff-three {
  background-attachment: fixed;
  background-image: url('../assets/images/img3.jpg');
  height: 100vh;
  background-size: cover;
  color: rgb(196, 15, 15);
}

</style>
