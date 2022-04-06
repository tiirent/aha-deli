<template>
  <v-app>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import './styles/application.scss'

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
