<template>
  <div>
    <div class="footer">
      <div class="filter"></div>
      <el-row>
        <el-col :span="8">
         鸣谢：
          <br>
          <a href="http://blog.csdn.net/w3045872817">EricJeff_</a>
          <br>
          <a href="http://xh.jblog.info:3000/#/?_k=2vfhai">小禾登</a>
        </el-col>
        <el-col :span="8">
          <span>参考及使用：</span>
          <br>
          <a href="http://element-cn.eleme.io/#/zh-CN/guide/design">Element.js</a>
          <br>
          <a href="https://developer.mozilla.org/zh-CN/">MDN</a>
          <br>
          <a href="http://www.iconfont.cn/">阿里图标库</a>
          <br>
          <a href="https://cn.vuejs.org/">VUE官网</a>
        </el-col>

        <el-col :span="8">
          <span>关于信犀新媒体:</span>
          <img src="../assets/logo.jpg" alt="" class="xinxi">
          <br>
          <span>QQ群：617788403</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'footer',
    data() {
      return {
      }
    },
    computed: mapState({
      totalPrice: state => state.totalPrice
    }),
    mounted () {
      this.$store.dispatch('increment')
      console.log(this.$store.state.totalPrice)
    }
  }
</script>

<style scoped>
  .footer{
    width: 100%;
    height: 150px;
    text-align: center;
    background: #B4BCCC;
    text-align: center;
    overflow: hidden;
    color:#5A5E66;
  }
  .filter{
    margin-top: 20px;
  }
  a{
    color:#fff;
  }
  img{
    vertical-align: top;
  }
  .xinxi{
    width: 20%;
  }
</style>
