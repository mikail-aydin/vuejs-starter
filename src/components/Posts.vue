<template>
  <v-card>
    <v-card-title class="headline">Post İşlemi</v-card-title>
    <v-divider />
    <v-form @submit.prevent="onCreatePost">
      <div id="ThePosts">
        <v-text-field
          label="UserId"
          v-model="formData.userId"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          label="Title"
          v-model="formData.title"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          label="Body"
          v-model="formData.body"
          hide-details="auto"
        ></v-text-field>
      </div>
      <br />
      <div id="ThePosts">
        <v-btn type="submit" block color="primary" elevation="7">Gönder</v-btn>
      </div>
    </v-form>
    <br />
  </v-card>
</template>
<script>
import axios from "../axios";
export default {
  name: "ThePosts",
  data() {
    return {
      formData: {
        userId: "",
        title: "",
        body: "",
      },
    };
  },
  methods: {
    onCreatePost() {
      axios.post("/posts", this.formData).then((Response) => {
        console.log(Response);
      });
    },
  },
};
</script>
