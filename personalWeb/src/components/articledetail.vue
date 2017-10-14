<template>
  <div>
    <el-card class="box-card">
      <div class="header">
        <div class="time">OCTOBER 14 2016</div>
        <div class="title">微信小程序的组件化开发</div>
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
      </div>
      <div class="text">
        今天看了一个大牛写的博客，了解了字段是如何在class中组织的和如何赋值的，也就是class中字段的机制

        先学习几个名词吧
        字段表：存储一个字段的信息的数据结构（你就想象成一个容器）
        字段表集合：多个字段表组合在一起形成集合

        字段表包括什么内容呢？
        访问标志，名称索引，描述索引，属性计数器【如果属性计数器大于等于1，就有 ConstantValue[属性名称索引，属性长度，常量值索引]   这个数据结构】

        访问标志：就是字段的修饰符，2个字节表示，会生成一个数值如0x000A,与之对应的有一个 （）特征值，标志符）表，与特征值求与（&）运算，结果为1，就有这个标志符

        名称索引和描述索引：都是2字节，存储常量池中某常量的地址，名称---->字段名字，描述---->类型

        我们先讲讲字段的赋值再将，属性计数器
        有些时候我们会对一个字段直接赋值：如：private int a = 10;
        这时就分为静态和非静态的了
        1.静态：在构造方法中赋值
        2.非静态：A.在静态构造方法中赋值B.在ConstantValue属性进行赋值
        用ConstantValue属性进行赋值的条件：被static和final修饰，并且是基本类型或String类型，那么不被final修饰或者不是基本类型或String就在构造方法中赋值，

        现在开始讲属性计数器：
        属性计数器大于0的天是有字段是 ：被static和final修饰，并且是基本类型或String类型
        就会用ConstantValue属性赋值：第一个属性名称一般都是“ConstantValue”字符串代表是ConstantValue类型

        再讲一个知识点，其实class中的类型和java中数据类型不一样，有一个（数据类型和class类型）表：

        class文件将字段名称和field字段的数据类型表示作为字符串存储在常量池中。在field_info结构体中，紧接着访问标志的，就是字段名称索引和字段描述符索引，它们分别占有两个字节，其内部存储的是指向了常量池中的某个常量池项的索引，对应的常量池项中存储的字符串，分别表示该字段的名称和字段描述符

        参考：http://m.blog.csdn.net/u010349169/article/details/41046443
        ------------------------------------------------------------------------
      </div>
      <div class="myrate">
        <div class="block">
          <el-rate v-model="value1"></el-rate>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'articledetail',
    data () {
    		return {
          value1:null,
          value5: 3.7,
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
</style>
