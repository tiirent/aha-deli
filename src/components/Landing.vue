<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <section class="section bg-tan-white">
        <Welcome />
    </section>
    <section class="section bg-tan-white">
      Second section ...
    </section>
  </full-page>
</template>

<script>
import Welcome from '@/components/WelcomeSection'

export default {
  name: 'Landing',
  components: {
    Welcome,
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  height: 100vh;
}
</style>
