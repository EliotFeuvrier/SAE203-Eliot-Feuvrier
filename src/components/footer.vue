<template>
<div class="w-full h-auto bg-black">
    <div class="pt-6 grid grid-cols-3 content-start " >
            
            

            <div class="  grid place-items-center">    
                <RouterLink to="/contact"> <h2 class="text-white font-big-shoulders-text text-lg text-center">NOUS CONTACTER</h2> </RouterLink>
                <p class="text-white w-[255px] leading-2  mb-24">Si vous avez la moindre question, contacter nous ci-dessus...</p>
            </div>

            <div class="  grid place-items-center">
                <h2 class="text-white font-big-shoulders-text text-lg text-center">NOUS SUIVRE</h2>
                <div class="flex gap-2 w-96 mb-20">
                    <img src="/images/facebook.svg" alt="Logo Facebook" class="w-1/3 lg:scale-50">
                    <img src="/images/instagram.svg" alt="Logo Instagram" class="w-1/3 lg:scale-50">
                    <img src="/images/linkedin.svg" alt="Logo Linkedin" class="w-1/3 lg:scale-50">
                    <img src="/images/twitter.svg" alt="Logo Twitter" class="w-1/3 lg:scale-50">
                </div>
            </div>
        
            <div class="  grid place-items-center"> 
                <h2 class="text-white font-big-shoulders-text text-lg text-center">NEWSLETTER</h2>
                <p class="text-white w-[255px] leading-2 mt-4 mb-4">Inscrivez vous à la Newsletter pour ne pas manquer les actualités du festival</p>
                <form action="" class="bg-white w-[255px] p-2 rounded-[3px]">
                    <input type="mail" class="w-full rounded-xl" placeholder="Adresse mail">
                    <RouterLink to="/newsletterpopup">
                    </RouterLink>
                </form>
                <bouton class=" mt-6" msg="S'abonner"/>
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
