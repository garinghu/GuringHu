<template>
  <div>
      <el-card class="box-card">
        <div class="selection">
          <el-select v-model="value" placeholder="请选择排序方式">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
       <ul>
         <li v-for="(item, index) in getNewsList">
          <div>
            <div class="time">
              OCTOBER 14,2016
            </div>
            <div class="title">
              微信小程序的组件化开发
            </div>
            <div class="discription">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto at, atque autem corporis dignissimos dolor eius exercitationem impedit in minima nisi officiis porro praesentium ratione repellat sint, tempore? Facilis.
            </div>
            <div class="tags">
              <el-tag type="success">标签四</el-tag>
              <el-tag type="warning">标签五</el-tag>
            </div>
            <div class="rate">
              <el-rate
                v-model="value5"
                disabled
                show-text
                text-color="#ff9900"
                text-template="{value}">
              </el-rate>
            </div>

            <div class="title-img"></div>
          </div>
         </li>
       </ul>
        <div class="loading">
          <img src="../assets/slide-down.png" alt="">
        </div>
      </el-card>
  </div>
</template>

<script>
  import ElCard from "../../node_modules/element-ui/packages/card/src/main";
  export default {
    components: {ElCard},
    name: 'articlelist',
    data () {
    		return{
          value5: 3.7,
          backgroundDiv: {
            backgroundImage: 'url(' + require('../assets/images/img-1.jpg') + ')',
          },
          getNewsList: [
            {
              "id": 1,
              "title": "新闻条目1新闻条目1新闻条目1新闻条目1",
              "titleBack":"../assets/images/img-1.jpg"
            },
            {
              "id": 2,
              "title": "新闻条目2新闻条目2新闻条目2新闻条目2",
              "titleBack":"../assets/images/img-1.jpg"
            },
            {
              "id": 3,
              "title": "新闻条3新闻条3新闻条3",
              "titleBack":"../assets/images/img-1.jpg"
            },
            {
              "id": 4,
              "title": "新闻条4广告发布",
              "titleBack":"../assets/images/img-1.jpg"
            },
            {
              "id": 5,
              "titleBack":"../assets/images/img-1.jpg"
            }
          ],
          options: [{
            value: '选项1',
            label: '时间'
          }, {
            value: '选项2',
            label: '评分'
          }],
          value: ''
        }
    }
  }
</script>

<style scoped>
  *{
    font-family: "Work Sans", Arial, sans-serif;
  }
  ul{
    list-style: none;
  }
  .filter{
    width:100%;
    height:1px;
  }
  li{
    width: 85%;
    border-bottom:1px solid rgb(183,183,183);
    padding:5% 0 5% 0;
    margin:0 auto;
  }
  .time,.title,.discription,.tags,.rate{

  }
  .time{
    color:rgb(183,183,183);
  }
  .title{
    font-size:20px;
    font-weight: lighter;
    margin-top: 1%;
    cursor:pointer;
    transition: all 0.5s;
  }
  .title:hover{
    color:rgb(252,81,133);
  }
  .discription{
    color:rgb(130,161,208);
    margin-top: 1%;
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  }
  .rate{
    margin-top: 1%;
  }
  .selection{
    margin-left: 5%;
  }
  .box-card{
    position: relative;
  }
  .loading{
    width: 80%;
    margin:0 auto;
    text-align: center;
    padding-top: 20px;
  }
  .loading img{
    transition: all 0.5s;
  }
  .loading img:hover{
    width: 35px;
  }


</style>
