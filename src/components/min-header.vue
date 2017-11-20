<template>
  <div>
    <el-row>
      <el-col :span="24" :class="[{header},{scrolltop:scroll != 0}]">
        <el-row>
          <el-col :span="8" class="min" >
            <img src="../assets/menu.png" alt="" :class="[{menu},{rotate:rotatel == true}]" @click="showMenu">
          </el-col>
          <el-col :span="8" class="min">
            <div class="name">
            GaringHu
            </div>
          </el-col>
          <el-col :span="8" class="min">
            <img src="../assets/github.png" alt="">
          </el-col>
        </el-row>
        <el-row :class="[{list},{listdown:rotatel == true}]">
          <ul>
            <a href="http://my.csdn.net/w3045872817">
              <li>友情链接</li>
            </a>

            <a href="http://106.15.228.215:81/game/index.html">
              <li>h5小游戏</li>
            </a>

            <a href="http://106.15.228.215:8080/Blog/images/1509943902939.html">
              <li>我的简历</li>
            </a>
          </ul>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'minwidthheader',
    data() {
      return {
        header:'header',
        scrolltop:'scrolltop',
        scroll: '',
        rotate:'rotate',
        menu:'menu',
        rotatel:'false',
        list:'list',
        listdown:'listdown'
      }
    },
    methods: {
      menul() {
        this.scroll = document.body.scrollTop;
      },
      showMenu () {
        this.rotatel = !this.rotatel;
      }
    },
    mounted() {
      window.addEventListener('scroll', this.menul)
    },
  }
</script>

<style scoped>
  ul{
    list-style: none;
  }
  a{
    color:#fff;
    text-decoration: none;
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
  .name{
    text-shadow: 0 0 5px #fff;
  }
  .min{
    text-align: center;
  }
  img{
    vertical-align: middle;
  }
  .menu{
    transition: all 0.5s ease-in-out;
  }
  .rotate{
    transform:rotate(90deg);
  }
  .list{
    transition: all 0.5s ease-in-out;
    height: 0;
  }
  .listdown{
    height: 250px;
  }
  li{
    border-top:1px solid #fff;
    text-align: center;
    cursor:pointer;
    transition: text-shadow 0.5s ease-in-out;
  }
  li:hover{
    text-shadow: 0 0 5px #fff;
  }
</style>
