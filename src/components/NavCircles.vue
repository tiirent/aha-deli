<template>
  <v-container class="nav" id="nav">
    <v-row no-gutters>
      <v-col cols="auto">
        <v-btn
          :color="buttonColor"
          data-menuanchor="welcome"
          class="mx-2"
          fab
          href="#welcome"
        />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="auto">
        <v-btn
          :color="buttonColor"
          data-menuanchor="menu"
          class="mx-2"
          fab
          href="#menu"
        />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="auto">
        <v-btn
          :color="buttonColor"
          data-menuanchor="order"
          class="mx-2"
          fab
          href="#order"
        />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="auto">
        <v-btn
          :color="buttonColor"
          data-menuanchor="about"
          class="mx-2"
          fab
          href="#about"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      buttonColor: "#161b22",
    };
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.nav {
  position: fixed;
  top: 44%;
  right: 0;
  width: 4em;
  /* border: 3px solid #73ad21; */
}
.v-btn {
  height: 0.5em;
  width: 0.5em;
  transition: all 0.2s ease-in-out;
  opacity: 0.7;
}
.v-btn:hover {
  transform: scale(1.5);
}
.active {
  transform: scale(2) !important;
}
</style>
