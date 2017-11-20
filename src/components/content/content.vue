<template>
  <div>
    <div class="markdown-body" v-html="content"></div>
  </div>
</template>

<script>
  //import './markdownstyle.css'
  import './markdownbody.css'
  import 'github-markdown-css'
  import './prism.css'
  import {prism} from './prism.js'
  export default {
    name: 'content',
    props: [
     'content'
    ],
    mounted () {
      setTimeout(() => {
        prism();
      }, 0);
    }
  }
</script>

<style scoped>
  .markdown-body{
    width: 95%;
    margin: 0 auto;
  }



</style>
