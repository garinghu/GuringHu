<template>
  <div class="hello">
    <el-card>
        <div v-if="commentFlag">暂无评论</div>
        <ul>
            <li v-for="(item, index) in comment" class="comment">
                <a :href="item.blog">{{ item.name ? item.name : item.mail }}</a>
                <span class="date">{{item.date}}</span>
                <div class="content">{{item.content}}</div>
                <div class="reply">
                    <ul v-if="item.reply.length != 0">
                        <li v-for="(reply, index) in item.reply">
                            <a :href="reply.blog">{{ reply.name ? reply.name : reply.mail }}</a>
                            <span class="date">{{reply.date}}</span>
                            <div class="content">{{ reply.content }}</div>
                        </li>
                    </ul>
                    <div class="post-comment">
                        <el-button type="primary"  @click="showForm(index)">添加评论</el-button>
                        <div v-if="item.flag" class="flag">
                            
                            
                            <el-row>
                                <el-col :span="6">
                                    <el-input  v-model="name" placeholder="请输入您的大名"></el-input>
                                </el-col>
                                <el-col :span="1"><div class="filter"></div></el-col>
                                <el-col :span="6">
                                    <el-input  v-model="mail" placeholder="请输入您的邮箱"></el-input>
                                </el-col>
                                <el-col :span="1"><div class="filter"></div></el-col>
                                <el-col :span="10">
                                    <el-input  v-model="blog" placeholder="请输入您的个人网站(git也行)"></el-input>
                                </el-col>
                            </el-row>

                            <el-row>
                                <el-input
                                class="textarea"
                                type="textarea"
                                :rows="4"
                                placeholder="请输入内容"
                                v-model="content"
                                ></el-input>
                            </el-row>
                            <el-button type="primary" @click="submitForm(item.id, articleId)">提交</el-button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </el-card>
    <el-card class="one-comment">
        <div>添加评论</div>
        <el-row>
            <el-col :span="6">
                <el-input  v-model="name" placeholder="请输入您的大名"></el-input>
            </el-col>
            <el-col :span="1"><div class="filter"></div></el-col>
            <el-col :span="6">
                <el-input  v-model="mail" placeholder="请输入您的邮箱"></el-input>
            </el-col>
            <el-col :span="1"><div class="filter"></div></el-col>
            <el-col :span="10">
                <el-input  v-model="blog" placeholder="请输入您的个人网站(git也行)"></el-input>
            </el-col>
        </el-row>

        <el-row>
            <el-input
            class="textarea"
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="content"
            ></el-input>
        </el-row>
        <el-button type="primary" @click="submitOneForm()" class="all">提交</el-button>
    </el-card>
  </div>
</template>

<script>
import Axios from "axios"
import pathToRegexp from 'path-to-regexp';
export default {
  name: 'comment',
  props: {
      articleId: {
          type: String,
          default: '',
      }
  },
  data () {
    return {
      comment:[],
      name: '',
      mail: '',
      blog: '',
      content: '',
      commentFlag: false
    }
  },
  methods: {
      _isEmail (str) {
          var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
          return reg.test(str); 
      },
      _isUrl (str) {
          var reg=/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/;
          return reg.test(str);
      },
      showForm (index) {
        for(let i in this.comment){
            if(i == index){

            }else{
                this.comment[i].flag = false;
            }
        }
        this.comment[index].flag = !this.comment[index].flag
      },
      submitForm (id, articleId) {
          if(this._isEmail(this.mail) && this._isUrl(this.blog)){
             Axios.post("http://106.15.228.215:8080/Blog/data/remark/addition", {
              "articleId": this.articleId,
              "fromId": 1,
              "content": this.content,
              "name": this.name,
              "mail": this.mail,
              "blog": this.blog,
              "kid": id
          }, {
                      headers: {
                            'Content-Type': 'application/json'
                      }
                  })
                  .then((response) => {
                      localStorage.name = this.name;
                      localStorage.mail = this.mail;
                      localStorage.blog = this.blog;
                      this.content = ''
                     Axios.get('http://106.15.228.215:8080/Blog/data/remark/' + articleId + '/1')
                        .then((res) => {
                        var comment =res.data.data;
                        for(var index in res.data.data){          
                            comment[index].flag = false
                            var timestamp = new Date(comment[index].date);
                            var y = timestamp.getFullYear(),
                                m = timestamp.getMonth() + 1,
                                d = timestamp.getDate();
                            comment[index].date = y + '-' + m + '-'  + d;
                            if(comment[index].reply.length != 0){
                                for(var ide in comment[index].reply){
                                    var timestamp = new Date(comment[index].reply[ide].date);
                                    var y = timestamp.getFullYear(),
                                        m = timestamp.getMonth() + 1,
                                        d = timestamp.getDate();
                                    comment[index].reply[ide].date = y + '-' + m + '-'  + d;
                                }
                            }
                        }
                        this.comment = comment
                        console.log(this.comment)
                        })
                  })
                  

          }else{
              alert('请输入正确的邮箱和网址')
          }
      },
      submitOneForm () {
          if(this._isEmail(this.mail) && this._isUrl(this.blog)){
             Axios.post("http://106.15.228.215:8080/Blog/data/remark/addition", {
              "articleId": this.articleId,
              "fromId": 1,
              "content": this.content,
              "name": this.name,
              "mail": this.mail,
              "blog": this.blog,
              "kid": 0
          }, {
                      headers: {
                            'Content-Type': 'application/json'
                      }
                  })
                  .then((response) => {
                      this.commentFlag = true;
                      localStorage.name = this.name;
                      localStorage.mail = this.mail;
                      localStorage.blog = this.blog;
                      this.content = ''
                     Axios.get('http://106.15.228.215:8080/Blog/data/remark/' + this.articleId + '/1')
                        .then((res) => {
                        var comment =res.data.data;
                        for(var index in res.data.data){          
                            comment[index].flag = false
                            var timestamp = new Date(comment[index].date);
                            var y = timestamp.getFullYear(),
                                m = timestamp.getMonth() + 1,
                                d = timestamp.getDate();
                            comment[index].date = y + '-' + m + '-'  + d;
                            if(comment[index].reply.length != 0){
                                for(var ide in comment[index].reply){
                                    var timestamp = new Date(comment[index].reply[ide].date);
                                    var y = timestamp.getFullYear(),
                                        m = timestamp.getMonth() + 1,
                                        d = timestamp.getDate();
                                    comment[index].reply[ide].date = y + '-' + m + '-'  + d;
                                }
                            }
                        }
                        this.comment = comment
                        console.log(this.comment)
                        })
                  })
                  

          }else{
              alert('请输入正确的邮箱和网址')
          }
      }
  },
  created () {
      this.name = localStorage.name ? localStorage.name : '';
      this.mail = localStorage.mail ? localStorage.mail : '';
      this.blog = localStorage.blog ? localStorage.blog : '';
      if(this.articleId != ''){
        let articleId = this.articleId
       Axios.get('http://106.15.228.215:8080/Blog/data/remark/' + articleId + '/1')
        .then((res) => {
            if(res.data.data.length == 0){
                this.commentFlag = true;
            }else{
                 var comment =res.data.data;
                for(var index in res.data.data){          
                    comment[index].flag = false
                    var timestamp = new Date(comment[index].date);
                    var y = timestamp.getFullYear(),
                        m = timestamp.getMonth() + 1,
                        d = timestamp.getDate();
                    comment[index].date = y + '-' + m + '-'  + d;
                    if(comment[index].reply.length != 0){
                        for(var ide in comment[index].reply){
                            var timestamp = new Date(comment[index].reply[ide].date);
                            var y = timestamp.getFullYear(),
                                m = timestamp.getMonth() + 1,
                                d = timestamp.getDate();
                            comment[index].reply[ide].date = y + '-' + m + '-'  + d;
                        }
                    }
                }
                this.comment = comment
            }
         
        })
      }
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin:0;
    padding: 0;
}
.el-row{
    margin-top: 10px;
}
.filter{
    width: 100%;
    height: 1px;
}
.el-button{
    font-size:12px;
    padding:2px 3px 2px 3px;
}
.el-input{
    margin:10px 0 0 0;
}
.hello{
    margin-top: 20px;
}
ul{
    list-style: none;
}
a{
    color: #409EFF;
    text-decoration: none;
}
a:hover{
    color: rgb(252,81,133)
}
.comment{
    padding:10px 0 10px 0;
    border-bottom: 1px solid #878D99;
}
.content{
    width: 95%;
    margin:0 auto;
    padding: 10px 0 10px 0;
}
.reply{
    width: 90%;
    margin-left: 10%;
}
.flag .el-button{
    font-size: 16px;
    margin-top: 10px;
}
.date{
    color:rgb(183,183,183);
    padding-left: 10px;
    font-size:14px;
}
.all{
    font-size: 16px;
    margin-top: 10px;
}
.one-comment{
    margin-top: 20px;
}
</style>
