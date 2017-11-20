<template>
  <div>


    <el-row>
      <el-col :span="2">
        <div class="filter"></div>
      </el-col>
      <el-col :span="20">


            <el-card :body-style="{ margin: '0px' }">
              <img src="../assets/HTML.png" class="image" @click="toWeb">
              <div style="padding: 14px;">
                <span >html + css</span>
              </div>
            </el-card>


            <el-card :body-style="{ margin: '0px' }">
              <img src="../assets/javascript.png" class="image" @click="toJS">
              <div style="padding: 14px;">
                <span>原生js</span>
              </div>
            </el-card>


            <el-card :body-style="{ margin: '0px' }">
              <img src="../assets/computer.png" class="image" @click="toOthers">
              <div style="padding: 14px;">
                <span>杂文</span>
              </div>
            </el-card>


            <el-card :body-style="{ margin: '0px' }">
              <img src="../assets/vue.png" class="image" @click="toVue">
              <div style="padding: 14px;">
                <span>vue.js</span>
              </div>
            </el-card>


      </el-col>
      <el-col :span="2">
        <div class="filter"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'classification',
    data() {
      return {
        maxcol:6,
        middlecol:10,
        mincol:20,
      };
    },
    methods: {
    		toWeb () {
          this.$store.commit('web')
          console.log(this.$store.state.totalPrice)
        },
        toJS () {
          this.$store.commit('js')
//          console.log(this.$store.state.totalPrice)
        },
        toOthers () {
          this.$store.commit('others')
//          console.log(this.$store.state.totalPrice)
        },
        toVue () {
          this.$store.commit('vuejs')
//          console.log(this.$store.state.totalPrice)
        },
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
  .filter{
    width: 100%;
    height: 1px;
  }
  .el-card{
    height: 200px;
    text-align: center;
    width:22%;
    float: left;
    margin-right:3.5%;
  }
  .el-card:last-child{
    margin-right:0;
  }
  .el-card img{
    width:47%;
    height:47%;
    display: inline;
    margin-top: 3%;
    transition: all 1s;

  }
  .el-card:hover img{
    transform: rotateY(180deg);
  }

  @media only screen and (max-width: 767px) {
    .el-card{
      width:45%;
      margin: 20px 5% 0 0;
      float: left;
      padding: 0;
    }
    .el-card:nth-child(even){
      margin:20px 0 0 0 ;
      padding: 0;
    }
  }

  @media only screen and (max-width: 500px) {
    .el-card{
      width:100%;
      margin-top: 20px;
    }
    .el-card img{
      width:30%;
      height:30%;
    }

  }
</style>
