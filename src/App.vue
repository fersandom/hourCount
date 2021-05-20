<template>
  <Header />
  <Form />
  <TotalHours/>
  <List />
</template>

<script>
import { provide } from "vue";
import store from "@/store";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import TotalHours from "./components/TotalHours"
export default {

created(){
store.methods.loadCookie();
},

  setup() {
    provide("store", store);
  },

  components: {
    Header,
    Form,
    List,
    TotalHours
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Karla&display=swap");

* {
  margin: 0;
  padding: 0;
}
body {
  background-color: white;
  font-family: "Karla", sans-serif;
}
</style>
