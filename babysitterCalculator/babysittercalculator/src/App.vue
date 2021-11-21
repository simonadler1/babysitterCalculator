<template>
  <v-app>
    <v-main>
      <v-container fill-height justify-center><calculator /></v-container>
    </v-main>
  </v-app>
</template>

<script>
import calculator from "./components/calculator.vue";
export default {
  name: "App",

  components: { calculator },

  data: () => ({
    //
  }),
};
</script>
<style scoped></style>
