<template>
  <div>
    <FullPage ref="fullpage" :options="options" id="fullpage">
      <div class="section bg-tan-white">
          <Welcome />
      </div>
      <div class="section bg-tan-white">
          <Menu />
      </div>
      <div class="section bg-tan-white">
          <Order />
      </div>
      <div class="section bg-tan-white">
          <About />
      </div>
    </FullPage>
    <NavCircles />
  </div>
</template>

<script>
import Welcome from '@/components/WelcomeSection'
import Menu from '@/components/MenuSection'
import Order from '@/components/OrderSection'
import About from '@/components/AboutSection'
import NavCircles from '@/components/NavCircles'
import FullPage from 'vue-fullpage.js/src/FullPage'

export default {
  name: 'Landing',
  data() {
    return {
      options: {
        anchors: ['welcome', 'menu', 'order', 'about'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#0798ec'],
        afterLoad: this.afterLoad,
        menu: '#nav'
        // navigation: true
      },
    }
  },
  components: {
    Welcome,
    Menu,
    Order,
    About,
    FullPage,
    NavCircles
  },
  props: {
  },
  methods: {
    afterLoad() {
          console.log("Emitted 'after load' event.");
        }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
