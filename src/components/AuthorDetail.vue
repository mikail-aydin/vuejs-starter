<template>
  <v-card>
    <v-card-title class="text-capitalize headline">
      {{ author.name }}
    </v-card-title>
    <v-divider />
    <v-card-title class="headline">Yazara Ait İçerikler</v-card-title>
    <v-divider />
    <v-list>
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
</template>

<script>
import axios from "../axios";
export default {
  data() {
    const { userId } = this.$route.params;
    return {
      url: "/posts?userId=" + userId,
      url2: "/users/" + userId,
      blogs: [],
      author: null,
    };
  },
  created() {
    axios.get(this.url).then((response) => (this.blogs = response.data));
    axios.get(this.url2).then((response) => (this.author = response.data));
  },
};
</script>
