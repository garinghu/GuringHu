// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
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
import Footer from './components/footer.vue'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
  // mode: 'history',
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
        minC:MinClassfication,
        footer:Footer
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
        minC:MinClassfication,
        footer:Footer
      }
    }
  ]
})

let store = new Vuex.Store({
  state: {
    totalPrice: '',
    todos: [
      {id: 1, done: true},
      {id: 2, done: true}
    ]
  },
  getters: {
    test: state => {
      return state.todos.length
    },
  },
  mutations: {
    web (state) {
      state.totalPrice = '网站制作'
    },
    js (state) {
      state.totalPrice = '原生js'
    },
    others (state) {
      state.totalPrice = '杂文'
    },
    vuejs (state) {
      state.totalPrice = 'vue.js'
    }
  },
  actions: {
    increment ({ commit }) {

    }
  }

})


new Vue({
  el: '#app',
  router,
  store: store,
  render: h => h(LayOut),
  components: { LayOut }
})


