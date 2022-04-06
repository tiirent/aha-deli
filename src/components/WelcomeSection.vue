<template>
  <v-container fill-height fluid>
    <v-row fill-height>
      <v-col align="center">
        <p class="text-center hero-text">aha deli</p>
        <v-btn class="button" elevation=0 color="background">menu</v-btn>
        <v-btn class="button" elevation=0 color="background">order</v-btn>
        <v-btn class="button" elevation=0 color="background">about</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
  .button {
    margin-top: 7em;
    margin-left: 1em;
    margin-right: 1em;
  }
</style>
