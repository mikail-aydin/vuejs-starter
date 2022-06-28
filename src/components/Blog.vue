<template>
  <div id="app">
    <v-card>
      <v-list>
        <v-card-title class="headline">İçerikler</v-card-title>
        <v-divider />
        <v-list-item
          v-for="(blog, index) in blogs"
          :key="index"
          class="post"
          :to="'/blogs/' + blog.id"
        >
          <v-list-item-title class="text-capitalize">
            {{ blog.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import axios from "../axios";
export default {
  name: "App",
  data() {
    return {
      url: "/posts",
      blogs: [],
    };
  },
  created() {
    axios.get(this.url).then((response) => (this.blogs = response.data));
  },
};
</script>
