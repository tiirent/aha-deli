<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <section class="section grey">
        First section ...
    </section>
    <section class="section">
      Second section ...
    </section>
  </full-page>
</template>

<script>
export default {
  name: 'Landing',
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

red {
  background-color: grey;
}
</style>
