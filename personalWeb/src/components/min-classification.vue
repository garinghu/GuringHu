<template>
  <div>
    <el-row>
      <el-col :span="2">
        <div class="filter"></div>
      </el-col>
      <el-col :span="20">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/web.png" class="image">
          <div style="padding: 14px;">
            <span>网站制作</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="2">
        <div class="filter"></div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="2">
        <div class="filter"></div>
      </el-col>
      <el-col :span="20">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/H5.png" class="image">
          <div style="padding: 14px;">
            <span>网站制作</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="2">
        <div class="filter"></div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="2">
        <div class="filter"></div>
      </el-col>
      <el-col :span="20">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/微信小程序.png" class="image">
          <div style="padding: 14px;">
            <span>网站制作</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="2">
        <div class="filter"></div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="2">
        <div class="filter"></div>
      </el-col>
      <el-col :span="20">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/vue.png" class="image">
          <div style="padding: 14px;">
            <span>网站制作</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
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

      };
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
</style>
