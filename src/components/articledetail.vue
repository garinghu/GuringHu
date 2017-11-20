<template>
  <div>
    <el-card class="box-card">
      <div class="header">
        <div class="time">{{date}}</div>
        <div class="title">{{title}}</div>
        <div class="tags">
          <el-tag :type="tagStyle">{{tag}}</el-tag>
        </div>
        <div class="rate">
          <el-rate
            v-model="rate"
            disabled
            show-text
            text-color="#ff9900">
          </el-rate>
        </div>
      </div>
      <!--<div class="text" v-html="content"></div>-->
      <Content :content="content"></Content>
      <div class="myrate">
        <div class="block">
          <el-rate v-model="rateValue"></el-rate>
        </div>
      </div>
    </el-card>
    <comment :articleId="articleID"></comment>
  </div>
</template>

<script>
  import Axios from "axios"
  import {markdown} from 'markdown';
  import Content from './content/content.vue';
  import comment from './comment.vue'
  export default {
    name: 'articledetail',
    components: {Content,comment},
    data () {
    		return {
          rateValue:0,
          date:'',
          title:'',
          tag:'',
          rate:'',
          content:'',
          articleID:'',
          tagStyle:''
        }
    },
    methods: {
    		requestName () {
          let articleID = this.$route.query.id;
          this.articleID = articleID;
          Axios.get('http://106.15.228.215:8080/Blog/data/detail/' + articleID)
            .then((res)=>{
              var x = res.data.data;
              var timestamp = new Date(x.date);
              var y = timestamp.getFullYear(),
                m = timestamp.getMonth() + 1,
                d = timestamp.getDate();
              x.date = y + '-' + m + '-'  + d;
              this.date = x.date
              this.title = x.title
              this.tag = x.classification
              this.rate = x.graded.toFixed(1)
              this.content = x.content;
              this.tagStyle = x.tag
            })
        }
    },
    created () {
      let articleID = this.$route.query.id;
      this.articleID = articleID;
      Axios.get('http://106.15.228.215:8080/Blog/data/detail/' + articleID)
        .then((res)=>{
          var x = res.data.data;
          var timestamp = new Date(x.date);
          var y = timestamp.getFullYear(),
            m = timestamp.getMonth() + 1,
            d = timestamp.getDate();
          x.date = y + '-' + m + '-'  + d;
          this.date = x.date
          this.title = x.title
          this.tag = x.classification
          this.rate = x.graded.toFixed(1)
          this.content = x.content;
          this.tagStyle = x.tag
        })
     
    },
    watch:{
      '$route' (to, from) {
        let articleID = this.$route.query.id;
        this.articleID = articleID;
        Axios.get('http://106.15.228.215:8080/Blog/data/detail/' + articleID)
          .then((res)=>{
            var x = res.data.data;
            var timestamp = new Date(x.date);
            var y = timestamp.getFullYear(),
              m = timestamp.getMonth() + 1,
              d = timestamp.getDate();
            x.date = y + '-' + m + '-'  + d;
            this.date = x.date
            this.title = x.title
            this.tag = x.classification
            this.rate = x.graded.toFixed(1)
            this.content = x.content;
            this.tagStyle = x.tag
          })
      },
      rateValue:function(val){
        Axios.get('http://106.15.228.215:8080/Blog/data/grade/' + this.articleID + '/' + val)
          .then((res)=>{
            this.rate = res.data.data
          })
      }
    }
  }
</script>

<style scoped>
  *{
    font-family: "Work Sans", Arial, sans-serif;
  }
  .header{
    width: 90%;
    height: 100px;
    margin:0 auto;
    border-bottom:1px solid rgb(183,183,183);
  }
  .time{
    color:rgb(183,183,183);
    margin-top: 1%;
  }
  .title{
    font-size:20px;
    font-weight: lighter;
    cursor:pointer;
    transition: all 0.5s;
    margin-top: 1%;
  }
  .title:hover{
    color:rgb(252,81,133);
  }
  .tags{
    float: left;
    margin-top: 1%;
  }
  .rate{
    float: right;
    margin-top: 1%;
  }
  .text{
    width: 90%;
    margin:0 auto;
    font-weight: lighter;
    border-bottom:1px solid rgb(183,183,183);
  }
  .myrate{
    margin-left: 5%;
    float: left;
  }
  .myrate{
    width: 20%;
    margin:20px 0 20px  40%;
  }


</style>
