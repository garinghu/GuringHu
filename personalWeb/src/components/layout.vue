<template>
  <div>

    <keep-alive>
      <router-view :name="header"></router-view>
    </keep-alive>



    <el-row class="scroll-shadow" height="30%">
      <keep-alive>
        <router-view name="viewB"></router-view>
      </keep-alive>
    </el-row>


    <el-row>
      <keep-alive>
        <router-view :name="classification"></router-view>
      </keep-alive>
    </el-row>




    <el-row>
      <el-col :span="2"><div class="filter"></div></el-col>
      <el-col :span="20">
        <keep-alive>
          <router-view name="viewC" class="left"></router-view>
        </keep-alive>

        <keep-alive>
          <router-view name="viewA" class="myinfo"></router-view>
        </keep-alive>
      </el-col>
      <el-col :span="2"><div class="filter"></div></el-col>
    </el-row>




  </div>
</template>

<script>
  export default {
    name: 'layout',
    data() {
      return {
        screenWidth: document.body.clientWidth,
        header:'maxHeader',
        classification:'classiFy'
      }
    },
    methods: {

    },
    mounted () {
      const that = this
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
        })()
      }
    },
    watch: {
      screenWidth (val) {
        if (!this.timer) {
          this.screenWidth = val
          this.timer = true
          let that = this
          setTimeout(function () {
            // that.screenWidth = that.$store.state.canvasWidth
            console.log(that.screenWidth)
            if(that.screenWidth <= 768){
                  that.header = "minHeader";
            }else{
              that.header = "maxHeader";
            }
            that.timer = false
          }, 400)
        }
      }
    }

  }
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .left{
    width: 70%;
    float: left;
    margin-right: 5%;
  }
  .myinfo{
    width: 25%;
    float: right;
  }



  @media only screen and (max-width: 767px) {
    .nav-bar ul{
      display: none;
    }
    .github{
      display: none;
    }
    .nav-bar .logo{
      float:none;
      margin:0 auto;
      text-align: center;
    }
    .myinfo{
      display: none;
    }
    .left{
      width: 100%;
      float: left;
    }
  }

  @media only screen and (min-width: 768px) {
    .nav-bar ul{
      margin-left:10%;
    }
    .github{
      margin-left:5%;
    }

  }
  .filter{
    width: 100%;
    height: 1px;
  }



</style>
