import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import commercejs from './configCommercejs'

Vue.config.productionTip = false

// inject commercejs as a plugin, globally
Vue.mixin({
  beforeCreate() {
    this.$commerce = commercejs
  }
})

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
