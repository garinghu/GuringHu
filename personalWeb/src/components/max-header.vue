<template>
  <el-row>
    <el-col :span="24" :class="[{header},{scrolltop:scroll != 0}]">
      <div class="nav-bar">
        <div class="logo">GuringHu</div>
        <ul>
          <li>spiner</li>
          <li>icon</li>
          <li>css</li>
          <li>pattern</li>
          <li>palette</li>
        </ul>
        <img src="../assets/github.png" alt="" class="github">
        <div class="github"></div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'maxheader',
    data() {
      return {
        header:'header',
        scrolltop:'scrolltop',
        scroll: ''
      }
    },
    methods: {
      menu() {
        this.scroll = document.body.scrollTop;

      }
    },
    mounted() {
      window.addEventListener('scroll', this.menu)
    },
  }
</script>

<style scoped>
  ul{
    list-style: none;
  }
  li{
    float: left;
  }
  .header{
    background:rgb(0,0,0,0);
    position: fixed;
    z-index: 100;
    color:#fff;
    line-height:60px;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
  }
  .scrolltop{
    line-height:80px;
    background:rgba(0,0,0,0.5);
  }
  .nav-bar{
    width:80%;
    height: 80px;
    margin:0 auto;
    background:none;
  }
  .nav-bar .logo{
    text-shadow: 0 0 5px #fff;
    float: left;
    cursor:pointer;
  }
  .nav-bar ul{
    float: left;
    margin-left:20%;
  }
  .nav-bar ul li{
    padding:0 5% 0 5%;
    cursor:pointer;
    transition:text-shadow 1s;
  }
  .github{
    vertical-align: middle;
    /*margin-left:10%;*/
    width: 30px;
    height: 30px;
    border-radius:50%;
    transition:box-shadow 1s;
  }
  .github:hover{
    box-shadow: 0 0 5px #fff;
  }
  .nav-bar ul li:hover{
    text-shadow: 0 0 5px #fff;
  }

</style>

