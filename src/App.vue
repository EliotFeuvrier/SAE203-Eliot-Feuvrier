<template>

    <header1 />

    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fugit pariatur facere suscipit explicabo vel quibusdam vitae voluptates sit nesciunt ut saepe doloribus sequi hic nemo dolorem blanditiis inventore. Minus.</p>

    <RouterView />
    

<footer1/>

</template>


<script>
import { RouterLink, RouterView } from "vue-router";
import header1 from "./components/header.vue";
import footer1 from "./components/footer.vue";

export default {
  name: "App",

  components:{ header1, footer1 }
};
</script>