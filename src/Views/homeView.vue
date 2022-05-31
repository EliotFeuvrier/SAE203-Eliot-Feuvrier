
<template>


<main class=" min-h-screen bg-black">
  <p class="w-auto mx-[300px]   justify-around text-[35px] pt-40 text-center font-big-shoulders-text text-white">
  DAVID GUETTA - MARTIN GARRIX - MARTIN SOLVEIG - DJ SNAKE - VLADIMIR CAUCHEMAR - GABRY PONTE
</p>


<div class="w-auto mt-40 justify-around text-[35px] mb-20 text-center font-big-shoulders-text text-white">
  <h2>
    QUELQUES PHOTOS DE L’ANNÉE DERNIÈRE
  </h2>
  <hr class="border-b w-1/3 border-white m-auto" />

  <div class="flex gap-4 mt-20 ml-10">
    <img src="src\components\assets\fest-1.webp" alt="fest-1">
    <img src="src\components\assets\fest-2.webp" alt="fest-2">
    <img src="src\components\assets\fest-3.webp" alt="fest-3">
    <img src="src\components\assets\fest-4.webp" alt="fest-4">
    <img src="src\components\assets\fest-5.webp" alt="fest-5">
    <img src="src\components\assets\fest-6.webp" alt="fest-6">
  </div>
</div>

<div class="flex justify-center mt-8">
  <CardProg class="mx-14" date="8 AVRIL 2022" name1="MARTIN SOLVEIG" name2="VLADIMIR CAUCHEMAR" name3="ZOMBOY" name4="LOST FREQUENCIES" name5="BILLX"></CardProg>
  <CardProg class="mx-14" date="9 AVRIL 2022" name1="DJ SNAKE" name2="MARTIN GARRIX" name3="GABRY PONTE" name4="SEFA" name5="YUKSEK"></CardProg>
  <CardProg class="mx-14" date="10 AVRIL 2022" name1="DAVID GUETTA" name2="MARSHMELLO" name3="ROBIN SCHLUZ" name4="PAUL KALKBRENNER" name5="TOBHI"></CardProg>
</div>

<div class="grid grid-cols-2 place-items-center">
  <img class="mt-40" src="src\components\icones\Logo-Festival-grand.svg" alt="logo grand">
  <div>
    <div class="w-auto  mt-40 justify-around text-[35px] text-center font-big-shoulders-text text-white">
      <h2>
        L’ELECTRO MOODS FESTIVAL C’EST QUOI ?
      </h2>
      <hr class="border-b w-1/3 mt-6 border-white m-auto" />
    </div>
    <p class="text-lg text-white mt-20 mr-20 mb-20 ">Créer en 2021 à Strasbourg, l’éléctro moods festival est un événement de 3 jours de musique réunissant les meilleurs artistes éléctro de la planète...</p>
    <div class="flex justify-center">
      <bouton msg="Plus d'info"></bouton>
    </div>
  </div>
</div>

<div class="grid grid-cols-2 place-items-center">
  <div>
    <div class="mb-20">
      <p class="text-white uppercase  font-big-shoulders-text text-xl">BILLET JOURNÉE PASS 3 JOURS ET OFFRES VIP DISPONIBLES</p>
      <hr class="border-b w-3/4 mt-6 border-white m-auto" />
    </div>
    <div class="flex justify-center">
      <bouton msg="réserver"></bouton>
    </div>
  </div>
  
  <div class="mt-20 mb-40">
    <img src="src\components\assets\image-festival-6.jpg" alt="image-festival-6">
  </div>
</div>


</main>



</template>

<script>
import CardProg from "../components/CardProg.vue"
import bouton from "../components/bouton.vue"
export default {
    name: "homeView",

  components : { CardProg, bouton }
}
</script>
