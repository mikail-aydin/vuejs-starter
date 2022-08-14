<template>
  <v-card>
    <v-card-title class="headline">Post İşlemi</v-card-title>
    <v-divider />
    <v-form @submit.prevent="onCreatePost">
      <div id="ThePosts">
        <v-text-field
          label="UserId"
          type="number"
          v-model="formData.userId"
          :rules="rules"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          label="Title"
          v-model="formData.title"
          :rules="rules2"
          hide-details="auto"
        ></v-text-field>
        <v-text-field
          label="Body"
          v-model="formData.body"
          :rules="rules2"
          hide-details="auto"
        ></v-text-field>
      </div>
      <br />
      <div id="ThePosts">
        <v-btn type="submit" block color="primary" elevation="7" @click="alert"
          >Gönder</v-btn
        >
      </div>
    </v-form>
    <br />
    <v-divider />
  </v-card>
</template>
<script>
import axios from "../axios";
import sweetAlert from "sweetalert";
export default {
  name: "ThePosts",
  data() {
    return {
      formData: {
        userId: "",
        title: "",
        body: "",
      },
      rules: [
        (value) => !!value || "Zorunlu!",
        (value) => (value || "").length <= 3 || "Maksimum 3 karakter!",
      ],
      rules2: [(value) => !!value || "Zorunlu!"],
    };
  },
  methods: {
    onCreatePost() {
      axios
        .post("/posts", this.formData)
        .then((response) => (this.formData = response.data));
      console.log(this.formData);
    },
    alert() {
      sweetAlert("UYARI", "Kayıt Başarılı !");
    },
  },
};
</script>
