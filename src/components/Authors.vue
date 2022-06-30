<template>
  <div id="TheAuthors">
    <v-card>
      <v-list>
        <v-card-title class="headline">Yazarlar</v-card-title>
        <v-divider />
        <v-list-item
          v-for="(author, index) in authors"
          :key="index"
          class="post"
          :to="'/authors/' + author.id"
        >
          <v-list-item-title class="text-capitalize">
            {{ author.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import axios from "../axios";
export default {
  name: "TheAuthors",
  data() {
    return {
      url2: "/users",
      authors: [],
    };
  },
  created() {
    axios.get(this.url2).then((response) => (this.authors = response.data));
  },
};
</script>
