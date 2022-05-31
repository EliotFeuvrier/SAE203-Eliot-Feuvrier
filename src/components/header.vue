<template>

<div class="w-full bg-black h-[130px]">
    <div class="flex ">
        <RouterLink to="/"> <logo class="scale-75 mr-auto"/> </RouterLink>
        <titre class="ml-auto mt-10 my-6"/>
        <div class="flex ml-auto mr-auto gap-14  my-auto">
        <RouterLink to="/festival"> <p class="lg:text-lg font-big-shoulders-text text-base text-center text-white hover:text-white ">LE FESTIVAL</p> </RouterLink>
        <p class="text-white text-3xl"> </p>
        <RouterLink to="/programmation"> <p class="lg:text-lg font-big-shoulders-text text-base text-center text-white hover:text-white ">PROGRAMMATION</p> </RouterLink>
         <p class="text-white text-3xl"> </p>
        <RouterLink to="/lesartistes"> <p class="lg:text-lg font-big-shoulders-text text-base text-center text-white hover:text-white ">LES ARTISTES</p> </RouterLink>
         <p class="text-white text-3xl"> </p>
        <RouterLink to="/reserver"> <p class="lg:text-lg font-big-shoulders-text text-base text-center text-white hover:text-white ">RESERVER MA PLACE</p> </RouterLink>
        </div>
        
    </div>
</div>

</template>

<script>
import logo from "./icones/logo.vue";
import titre from "./icones/titre.vue";

import { RouterLink, RouterView } from "vue-router";

export default {
  components:{ logo, titre }
};

</script>