<template>
<div class="w-full h-auto bg-black">
    <div >
            
            

        <div class="flex justify-around">
        <div class="ml-10">    
        <h2 class="text-white font-big-shoulders-text lg:text-lg text-center">NOUS CONTACTER</h2>
            <p class="text-white w-[255px] leading-2 mt-4 mb-4">Si vous avez la moindre question, contacter nous ci-dessus...</p>
        </div>

        <div class="justify-center">
            <h2 class="text-white font-big-shoulders-text lg:text-lg text-center">NOUS SUIVRE</h2>
            <div class="flex gap-2 w-96">
                <img src="./icones/facebook.svg" alt="Logo Facebook" class="w-1/3 lg:scale-50">
                <img src="./icones/instagram.svg" alt="Logo Instagram" class="w-1/3 lg:scale-50">
                <img src="./icones/linkedin.svg" alt="Logo Linkedin" class="w-1/3 lg:scale-50">
                <img src="./icones/twitter.svg" alt="Logo Twitter" class="w-1/3 lg:scale-50">
            </div>
        </div>
        
        <div class="mr-10"> 
            <h2 class="text-white font-big-shoulders-text lg:text-lg text-center">NEWSLETTER</h2>
            <p class="text-white w-[255px] leading-2 mt-4 mb-4">Inscrivez vous à la Newsletter pour ne pas manquer les actualités du festival</p>
            <form action="" class="bg-white w-[255px] p-2 rounded-[3px]">
                <input type="mail" class="w-full rounded-xl" placeholder="Adresse mail">
                <RouterLink to="/newsletterpopup">
                </RouterLink>
            </form>
            <bouton class="ml-14 mr-auto mt-6" msg="S'abonner"/>
        </div>
        </div>
        
    </div>

   <RouterLink to="/mentionslegales"> <p class="text-white text-center"> © 2022 Electro Moods Festival | Mentions Légales | Voir les CGV</p> </RouterLink>
</div>
</template>

<script>
import bouton from "../components/bouton.vue";

import { RouterLink, RouterView } from "vue-router";

export default {
  components:{ bouton }
};
</script>
