<template>
  <v-card color="primary" dark>
    <v-card-title class="headline">
      {{ title }}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "TheHome",
  data() {
    return {
      title: "Merhaba !",
    };
  },
};
</script>
