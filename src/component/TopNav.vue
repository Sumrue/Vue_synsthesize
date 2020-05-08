<template>
  <div id="TopNav">
    <i class="el-icon-back" id="TopNavBack" @click="goback"></i>
    <div id="TopNavTitle">
      {{Title}}
    </div>
    <i class="el-icon-user" id="TopNavUser"></i>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Title: this.$store.state.TopTitle
    }
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
#TopNav {
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  background-color: #545c64;
  color: #ffffff;
}

#TopNavTitle {
  float: left;
  width: 50%;
  font-size: 20px;
  text-align: center;
  line-height: 60px;
}

#TopNavBack {
  float: left;
  width: 25%;
  font-size: 20px;
  padding:18px 0 0 10px;
}

#TopNavUser {
  float: right;
  text-align: right;
  font-size: 20px;
  padding:18px 10px 0 0 ;
}
</style>
