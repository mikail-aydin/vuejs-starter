<template>
  <v-card>
    <v-card class="mb-4">
      <v-card-title class="text-capitalize headline">
        {{ blogs.title }}
      </v-card-title>
      <v-divider />
      <v-card-subtitle>
        {{ blogs.body }}
        <v-card-actions>
          <v-spacer />
          <v-btn class="text-lowercase" to="/blog" text exact small>
            {{ back }}
          </v-btn>
        </v-card-actions>
      </v-card-subtitle>
    </v-card>

    <v-list>
      <v-subheader>Yorumlar</v-subheader>
      <v-list-item
        v-for="(comment, index) in comments"
        :key="index"
        class="post"
      >
        <v-list-item-title class="text-capitalize">
          {{ comment.name }}
          <br />
          <v-list-item-subtitle>
            {{ comment.body }}
          </v-list-item-subtitle>
          <br />
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import axios from "../axios";
export default {
  data() {
    const { postId } = this.$route.params;
    return {
      url: "/posts/" + postId,
      url2: "/comments?postId=" + postId,
      comments: [],
      blogs: null,
      back: "blog listesine geri dön",
    };
  },
  created() {
    axios.get(this.url).then((response) => (this.blogs = response.data));
    axios.get(this.url2).then((response) => (this.comments = response.data));
  },
};
</script>
