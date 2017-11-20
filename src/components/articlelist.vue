<template>
  <div>
      <el-card class="box-card">
        <div class="selection">
          <el-select v-model="sortValue" placeholder="请选择排序方式">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
       <ul>
         <li v-for="(item, index) in getArticleList">
          <div>
            <div class="time"   @click="testThis(index)">
              {{item.date}}
            </div>
            <div class="title" >
              <router-link :to="{path:'/detail',query:{id:item.id}}">
                {{item.title}}
              </router-link>
            </div>
            <div class="discription">
              {{item.summary}}
            </div>
            <div class="tags">
              <el-tag :type="item.tag">{{item.classification}}</el-tag>
            </div>
            <div class="rate">
              <el-rate
                v-model="item.graded"
                disabled
                show-text
                text-color="#ff9900"
              >
              </el-rate>
            </div>

            <div class="title-img"></div>
          </div>
         </li>
       </ul>
        <div class="loading" @click="getMore">
          <img src="../assets/slide-down.png" alt="">
        </div>
      </el-card>
  </div>
</template>

<script>
  import Axios from "axios"
  import ElCard from "../../node_modules/element-ui/packages/card/src/main";
  import {markdown} from 'markdown';
  export default {
    components: {ElCard},
    name: 'articlelist',
    data () {
    		return{
          getNum: 1,
          sortValue: 'date',
          backgroundDiv: {
            backgroundImage: 'url(' + require('../assets/images/img-1.jpg') + ')',
          },
          getArticleList: [],
          options: [{
            value: 'date',
            label: '时间'
          }, {
            value: 'graded',
            label: '评分'
          }]

        }
    },
    computed: {
    		listClass () {
    				return this.$store.state.totalPrice
        }
    },
    methods: {
      getMore () {
        this.getNum += 1
        if(this.$store.state.totalPrice == ''){
          Axios.get('http://106.15.228.215:8080/Blog/data/index/'  + this.sortValue + '/' + this.getNum)
            .then((res)=>{
              var x = res.data.data;
              for(let i = 0;i < x.length;i++){
                var timestamp = new Date(x[i].date);
                var y = timestamp.getFullYear(),
                  m = timestamp.getMonth() + 1,
                  d = timestamp.getDate();
                x[i].date = y + '-' + m + '-'  + d;
                x[i].graded = x[i].graded.toFixed(1);
              }
              this.getArticleList = x;
            })
        }else{
          Axios.get('http://106.15.228.215:8080/Blog/data/type/' + this.$store.state.totalPrice + '/' + this.sortValue + '/' + this.getNum)
            .then((res)=>{

              var x = res.data.data;
              for(let i = 0;i < x.length;i++){
                var timestamp = new Date(x[i].date);
                var y = timestamp.getFullYear(),
                  m = timestamp.getMonth() + 1,
                  d = timestamp.getDate();
                x[i].date = y + '-' + m + '-'  + d;
                x[i].graded = x[i].graded.toFixed(1);
              }
              this.getArticleList = x;
            })
        }

      },
      testThis (x) {

      },
      flushCom:function(){
        this.$router.go(0);
      },
      testClick (item) {
        this.$router.push({path:'/detail',query:{id:item.id}})
      }
    },
    mounted () {
      Axios.get('http://106.15.228.215:8080/Blog/data/index/date/1')
        .then((res)=>{
          console.log(res.data.data)
          var x = res.data.data;
          for(let i = 0;i < x.length;i++){
            var timestamp = new Date(x[i].date);
            var y = timestamp.getFullYear(),
              m = timestamp.getMonth() + 1,
              d = timestamp.getDate();
            x[i].date = y + '-' + m + '-'  + d;
            x[i].graded = x[i].graded.toFixed(1);
          }
          this.getArticleList = x;
        })


    },
    watch: {
      sortValue:function(val){
         console.log(val)
        this.getNum = 1;
        if(this.$store.state.totalPrice == ''){
          Axios.get('http://106.15.228.215:8080/Blog/data/index/' + val + '/' + 1)
            .then((res)=>{
              var x = res.data.data;
              for(let i = 0;i < x.length;i++){
                var timestamp = new Date(x[i].date);
                var y = timestamp.getFullYear(),
                  m = timestamp.getMonth() + 1,
                  d = timestamp.getDate();
                x[i].date = y + '-' + m + '-'  + d;
                x[i].graded = x[i].graded.toFixed(1);
              }
              this.getArticleList = x;
            })
        }else{
          Axios.get('http://106.15.228.215:8080/Blog/data/type/' + this.$store.state.totalPrice + '/' + val + '/' + '1')
            .then((res)=>{

              var x = res.data.data;
              console.log(x)
              for(let i = 0;i < x.length;i++){
                var timestamp = new Date(x[i].date);
                var y = timestamp.getFullYear(),
                  m = timestamp.getMonth() + 1,
                  d = timestamp.getDate();
                x[i].date = y + '-' + m + '-'  + d;
                x[i].graded = x[i].graded.toFixed(1);
              }
              this.getArticleList = x;
            })
        }

      },
      listClass (val) {
        this.getNum = 1;
        if(val == ''){

        }else{
          Axios.get('http://106.15.228.215:8080/Blog/data/type/' + val + '/' + 'date' + '/' + '1')
            .then((res)=>{
              var x = res.data.data;
              for(let i = 0;i < x.length;i++){
                var timestamp = new Date(x[i].date);
                var y = timestamp.getFullYear(),
                  m = timestamp.getMonth() + 1,
                  d = timestamp.getDate();
                x[i].date = y + '-' + m + '-'  + d;
                x[i].graded = x[i].graded.toFixed(1);
              }
              this.getArticleList = x;
            })
        }
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
  a{
    color:#000;
    text-decoration: none;
    transition: all 0.5s;
    font-weight: lighter;
  }
  a:hover{
    color:rgb(252,81,133);
  }

</style>
