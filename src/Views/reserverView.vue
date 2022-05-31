<template>

<main>

<section class="grid place-items-center my-20">
    <div class="border border-black rounded-2xl bg-black text-lg  text-white w-4/5">

         <p class="px-4 pt-5 pb-5">3 Jours</p> 
        
        <div class="flex bg-white justify-between border-b pt-5 pb-5 border-black text-lg text-black px-4"> 
        <p>Pass 3 Jours</p>
        <p>99.00€</p> 
        <img src="src\components\icones\menu-quantite.jpg" alt="menu quantité">
         </div>

        <div class="flex rounded-b-2xl bg-white justify-between pt-5 pb-5 text-lg text-black px-4"> 
        <p>Pass VIP 3 Jours</p>
        <p>299.00€</p> 
        <img src="src\components\icones\menu-quantite.jpg" alt="Menu quantité"> 
        </div>

    </div>
</section>

<section class="grid place-items-center my-20">
    <div class="border border-black rounded-2xl bg-black text-lg  text-white w-4/5">

         <p class="px-4 pt-5 pb-5">Vendredi 8 Avril</p> 
        
        <div class="flex bg-white justify-between border-b pt-5 pb-5 border-black text-lg text-black px-4"> 
        <p>Pass Journée</p>
        <p>36.00€</p> 
        <img src="src\components\icones\menu-quantite.jpg" alt="menu quantité">
         </div>

        <div class="flex rounded-b-2xl bg-white justify-between pt-5 pb-5 text-lg text-black px-4"> 
        <p>Pass VIP Journée</p>
        <p>89.00€</p> 
        <img src="src\components\icones\menu-quantite.jpg" alt="Menu quantité"> 
        </div>

    </div>
</section>

<section class="grid place-items-center my-20">
    <div class="border border-black rounded-2xl bg-black text-lg  text-white w-4/5">

         <p class="px-4 pt-5 pb-5">Samedi 9 Avril</p> 
        
        <div class="flex bg-white justify-between border-b pt-5 pb-5 border-black text-lg text-black px-4"> 
        <p>Pass Journée</p>
        <p>36.00€</p> 
        <img src="src\components\icones\menu-quantite.jpg" alt="menu quantité">
         </div>

        <div class="flex rounded-b-2xl bg-white justify-between pt-5 pb-5 text-lg text-black px-4"> 
        <p>Pass VIP Journée</p>
        <p>89.00€</p> 
        <img src="src\components\icones\menu-quantite.jpg" alt="Menu quantité"> 
        </div>

    </div>
</section>

<section class="grid place-items-center my-20">
    <div class="border border-black rounded-2xl bg-black text-lg  text-white w-4/5">

         <p class="px-4 pt-5 pb-5">Dimanche 10 Avril</p> 
        
        <div class="flex bg-white justify-between border-b pt-5 pb-5 border-black text-lg text-black px-4"> 
        <p>Pass Journée</p>
        <p>36.00€</p> 
        <img src="src\components\icones\menu-quantite.jpg" alt="menu quantité">
         </div>

        <div class="flex rounded-b-2xl bg-white justify-between pt-5 pb-5 text-lg text-black px-4"> 
        <p>Pass VIP Journée</p>
        <p>89.00€</p> 
        <img src="src\components\icones\menu-quantite.jpg" alt="Menu quantité"> 
        </div>

    </div>
</section>

<div class="grid grid-cols-3 place-items-center">
    <img src="src\components\icones\panier.svg" alt="panier">
    <img src="src\components\icones\paiement.svg" alt="paiement">
</div>

    <div class="w-auto  pt-24 justify-around text-[35px] text-center font-semibold font-big-shoulders-text text-black">
      <h2>
        OFFRE VIP
      </h2>
      <hr class="border-b w-1/3 mt-6 border-black m-auto" />
    </div>


    <div class="ml-80 my-20">
        <p class="text-lg font-semibold mb-8">L’offre VIP vous permettra d’avoir accès à certains bonus :</p>
        
        <ul>
        <span class="flex gap-2 mb-4">
            <check />
            <li>Accès coupe file</li>
        </span>

        <span class="flex gap-2 mb-4">
            <check />
            <li>Accès aux espaces premium près de la scène </li>
        </span>

        <span class="flex gap-2 mb-4">
        <check />
            <li>Wc dédiés près de la scène</li>
        </span>

        <span class="flex gap-2 mb-4">
        <check />
            <li>Bar avec champagne et alcools forts <span class="text-gray-600">(interdits aux mineurs)</span></li>
        </span>

        </ul>
    </div>

</main>
    
</template>

<script>
import check from "../components/icones/check.vue"

export default {
    components: { check}
}
</script>