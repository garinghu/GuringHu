// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import LayOut from './components/layout.vue'
import MaxHeader from './components/max-header.vue'
import MinHeader from './components/min-header.vue'
import MyInfo from './components/myinfo.vue'
import SlideShow from './components/slideshow.vue'
import ArticleList from './components/articlelist.vue'
import Classification from './components/classification.vue'
import MiddleClassification from './components/middle-classification.vue'
import MinClassfication from './components/min-classification.vue'
import ArticleDetail from './components/articledetail.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path:'/',
      components:{
        minHeader:MinHeader,
        maxHeader:MaxHeader,
        middleC:MiddleClassification,
        viewA:MyInfo,
        viewB:SlideShow,
        viewC:ArticleList,
        classiFy:Classification,
        minC:MinClassfication
      }
    },
    {
      path:'/detail',
      components:{
        minHeader:MinHeader,
        maxHeader:MaxHeader,
        middleC:MiddleClassification,
        viewA:MyInfo,
        viewB:SlideShow,
        viewC:ArticleDetail,
        // classiFy:Classification,
        minC:MinClassfication
      }
    }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(LayOut),
  components: { LayOut }
})


