<template>
  
  <main class="w-3/4 m-auto">
      <h1 class="text-center text-3xl bg-black text-white font-big-shoulders-text border pt-4 mt-4 pb-4">Guide de style</h1>
      
      <h1 class="font-big-shoulders-text font-bold text-2xl ml-2">Main Colors</h1>
      <div class="flex gap-4">
          <carre class="bg-Black "></carre>
          <carre class="bg-white"></carre>
          <carre class="bg-Blue"></carre>
          <carre class="bg-Grey"></carre>
      </div>
      
      <h1 class="font-big-shoulders-text font-bold text-2xl ml-2 my-5">Polices</h1>
      <h2 class="text-xl font-semibold mb-4 font-big-shoulders-text">H2 / Headline 2 - Font size 30px </h2>
      <h3 class="text-lg font-semibold mb-4 font-big-shoulders-text">H3 / Headline 3 - Font size 20px </h3>
      <h4 class="text-sm font-semibold mb-4 font-big-shoulders-text">H4 / Headline 4 - Font size 14px </h4>
      <h4 class="text-xs font-semibold mb-4 font-big-shoulders-text">H5 / Headline 5 - Font size 12px </h4>
      
      <h1 class="font-big-shoulders-text font-bold text-2xl ml-2 my-5">Icônes</h1>
      <div class="flex gap-2 w-96 mb-20 bg-black rounded-md">
                    <img src="src\components\icones\facebook.svg" alt="Logo Facebook" class="w-1/3 lg:scale-50">
                    <img src="src\components\icones\instagram.svg" alt="Logo Instagram" class="w-1/3 lg:scale-50">
                    <img src="src\components\icones\linkedin.svg" alt="Logo Linkedin" class="w-1/3 lg:scale-50">
                    <img src="src\components\icones\twitter.svg" alt="Logo Twitter" class="w-1/3 lg:scale-50">
                </div>
      
      <h1 class="font-big-shoulders-text font-bold text-2xl ml-2 my-5">Composants</h1>
      
      <CardArtiste image="src\components\assets\martin-solveig-2.jpg" nom="MARTIN SOLVEIG"></CardArtiste>
      <div class="flex place-items-center gap-2">
        <div class="bg-black rounded-lg p-4 w-max">
          <CardProg class="mx-14" date="8 AVRIL 2022" name1="MARTIN SOLVEIG" name2="VLADIMIR CAUCHEMAR" name3="ZOMBOY" name4="LOST FREQUENCIES" name5="BILLX"></CardProg>
        </div>
        <div class="bg-black rounded-lg p-4 w-max">
        <CardOrga image="src\components\assets\EliotFEUVRIER.jpg" desc="Fondateur" nom="ELIOT FEUVRIER"></CardOrga>
        </div>
        <div class="bg-black rounded-lg p-4 w-max">
        <bouton msg="Plus d'info"></bouton> 
        </div>
        <div class="bg-black rounded-lg p-4 w-max">
        <logo class="scale-75 mr-auto"/>
        </div>
        <div class="bg-black rounded-lg p-4 w-max">
        <titre class="ml-auto "/>
        </div>
      </div>

  </main>
</template>

<script>
import carre from "../components/icones/carre.vue"
import CardArtiste from "../components/CardArtiste.vue"
import CardOrga from "../components/CardOrga.vue"
import CardProg from "../components/CardProg.vue"
import bouton from "../components/bouton.vue"
import footer from "../components/footer.vue"
import header from "../components/header.vue"
import logo from "../components/icones/logo.vue"
import titre from "../components/icones/titre.vue"

export default {
name: "Guidedestyles",

components : {carre, CardArtiste, CardOrga, CardProg, bouton, footer, header, logo, titre}
    
}
</script>