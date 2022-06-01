<template>
    <main class=" min-h-screen bg-black">

  <div class="flex pt-60 ml-60 ">
    <img class="" src="/images/Martin-Sloveig-1.webp" alt="Martin-Solveig-1">
  
    <div class="flex flex-col font-big-shoulders-text text-xl w-[500px] ml-16 text-white">
      <p class="mb-6">VENDREDI 8 AVRIL</p>
      <p>TÊTE D’AFFICHE : MARTIN SOLVEIG
      18h30 - 2h30
      MARTIN SOLVEIG - VLADIMIR CAUCHEMAR - ZOMBOY - LOST FREQUENCIES - BILLX - MONOLINK - KUNGS
      </p>
    </div>
  </div>


    <div class="flex pt-60 ml-60 ">
    <img class="" src="/images/DJ-Snake-1.webp" alt="DJ-Snake-1">
  
    <div class="flex flex-col font-big-shoulders-text text-xl w-[500px] ml-16 text-white">
      <p class="mb-6">SAMEDI 9 AVRIL</p>
      <p>TÊTE D’AFFICHE : DJ SNAKE
          18h30 - 2h30 
          DJ SNAKE - MARTIN GARRIX - GABRY PONTE - SEFA - YUKSEK - PREZIOSO - UMBREE - MAKOTO SAN
      </p>
    </div>
  </div>


      <div class="flex pt-60 ml-60 pb-60 ">
    <img class="" src="/images/David-Guetta-1.webp" alt="DJ-Snake-1">
  
    <div class="flex flex-col font-big-shoulders-text text-xl w-[500px] ml-16 text-white">
      <p class="mb-6">DIMANCHE 10 AVRIL</p>
      <p>TÊTE D’AFFICHE : DAVID GUETTA
          18h30 - 2h30 
          DAVID GUETTA - MARSHMELLO - ROBIN SCHLUZ - PAUL KALKBRENNER - TOBHI - LUM!X - KAS:ST

      </p>
    </div>
  </div>

  <div class="font-big-shoulders-text text-xl w-[500px] ml-96 text-white">
    
    <p>RÉSERVER VOS PLACES JUSTE ICI
        BILLET JOURNÉE PASS 3 JOURS ET OFFRES VIP DISPONIBLES
    </p>
    
   <RouterLink to="/reserver"> <bouton class="mt-10 ml-40 pb-40" msg="réserver"></bouton> </RouterLink>
  </div>

</main>

</template>


<script>
import bouton from "../components/bouton.vue"

export default {
  name: "programmeView",

  components : {  bouton }
  };
</script>
