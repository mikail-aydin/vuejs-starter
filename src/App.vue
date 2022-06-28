<template>
  <v-app>
    <v-app-bar fixed app>
      <v-toolbar-title>
        <v-btn to="/" tag="span" style="cursor: pointer">
          {{ title }}
        </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(item, index) in menuItems"
          :key="index"
          :to="item.to"
          exact
          text
        >
          {{ item.text }}
        </v-btn>
      </v-toolbar-items>
      <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer" />
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: "Anasayfa",
      menuItems: [
        {
          text: "Yazarlar",
          to: "/authors",
        },
        {
          text: "Blog",
          to: "/blog",
        },
      ],
    };
  },
};
</script>

<style></style>
