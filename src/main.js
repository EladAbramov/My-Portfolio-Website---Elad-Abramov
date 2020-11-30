import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueClipboards from 'vue-clipboards'
import VueResizeObserver from "vue-resize-observer";

Vue.config.productionTip = false
Vue.use(VueResizeObserver);
Vue.use(VueClipboards)


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
