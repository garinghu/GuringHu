<template>
  <div>
    <el-card class="box-card">
      <div class="myphoto" :style="background" ref="myphoto">

      </div>
      <br>
      <span>胡家麟</span><br>
      <span>GaringHu  </span>
      <br>
      <el-card class="box-card my-tag">
        <span>About Me</span>
        <br>
        <el-tag>很早的一批微信开发者</el-tag>
        <el-tag type="gray">前端手艺人</el-tag>
        <el-tag type="primary">信犀实验室社长</el-tag>
        <el-tag type="success">97年生人</el-tag>
        <el-tag type="warning">对前端调试乐此不疲</el-tag>
        <el-tag type="danger">爱生活，爱vue</el-tag>
      </el-card>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'myinfo',
    data () {
    		return {
    				scroll:'',
            scrollx:'',
    				background: 'background-size:center -20px'
        }
    },
    methods: {
      menu() {
        this.scroll = document.body.scrollTop;

      }
    },
    mounted() {
      window.addEventListener('scroll', this.menu)
    }
//    watch: {
//      scroll (val) {
//        if (!this.timer) {
//          this.screenWidth = val
//          this.timer = true
//          let that = this
//          setTimeout(function () {
//            // that.screenWidth = that.$store.state.canvasWidth
//
//            that.scrollx = parseInt(that.scroll * 0.1);
//            that.$refs.myphoto.style.positionSize = 'center ' + '-' + that.scrollx + 'px';
//            console.log(that.$refs.myphoto.style.positionSize);
//            that.timer = false
//          }, 200)
//        }
//      }
//    }

  }
</script>

<style scoped>

  *{
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .filter{
    width:100%;
    height:1px;
  }
  .box-card{
    text-align: center;
  }
  .myphoto{
    border-radius:50%;
    border:1px solid #aaa;
    width:90%;
    padding-top: 90%;
    background:url(./../assets/images/myphoto.png);
    /*background-position: center -20px;*/
    background-size:cover;
    margin:0 auto;
    transition:background 1s ease-in-out;
  }
  .myphoto:hover{
    background:url(./../assets/images/myphoto.png) center -30px/cover;
  }
  .my-name{
    margin:0 auto;
    width:20%;
  }
  .mykey{
    color: transparent;
    transition: all 0.5s ease-in-out;
  }
  .turnleft{
    background:#20A0FF;
    color:#fff;
    border:1px solid #20A0FF;
    border-radius:5px;
    margin-top:10px;
    padding:4px 10px 4px 10px;
  }
  .my-tag{
    background: #e5e9f2;
  }
  .el-tag{
    margin-top: 5px;
  }
  .myimgphoto{
    width: 100%;
  }
</style>
