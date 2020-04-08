// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import App from './AppH5'
import router from './router/index'
// import wxService from './api/wxService'
// import httpService from './utils/httpService'
import store from './store/entry/h5'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.mixin({
  data() {
    return {
      service: '', // 服务
      router: '/', // 路由路径
      imgSrc: '' // 图片路径
    }
  },
  methods: {
    newroot() {
      return this.$route
    },
    navigatePageTo(url) {
      this.$router.push(url)
    },
    reLaunchPageTo(url) {
      this.$router.replace(url)
    },
    setStorageSync(name, data) {
      sessionStorage.setItem(name, JSON.stringify(data))
    },
    getStorageSync(name) {
      return JSON.parse(sessionStorage.getItem(name))
    }
  },
  created() {
    //this.service = httpService
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
