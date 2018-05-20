import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'
Vue.use(Vuetify, {
  iconfont: 'fa'
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')


