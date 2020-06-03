import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VideoPlayer from 'vue-video-player'
Vue.config.productionTip = false


import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
 
Vue.use(VideoPlayer)

import 'lib-flexible'

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
	router,
	store,
  render: h => h(App),
}).$mount('#app')
