<template>
  <el-row class="scroll-shadow" >
    <el-col :span="24">
      <el-carousel :interval="5000" arrow="always" >
        <el-carousel-item>
          <img src="../assets/images/img-1.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/images/img-1.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/images/img-1.jpg" alt="">
        </el-carousel-item>
        <el-carousel-item>
          <img src="../assets/images/img-1.jpg" alt="">
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'slideshow'
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;

    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .scroll-shadow{
    over-flow:hidden;
    margin-top:-30px;
  }
</style>
