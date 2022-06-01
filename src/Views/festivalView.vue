<template>

<main class=" min-h-screen bg-black">

    <div class="w-auto  pt-40 justify-around text-[35px] text-center font-big-shoulders-text text-white">
      <h2>
        L’ELECTRO MOODS FESTIVAL C’EST QUOI ?
      </h2>
      <hr class="border-b w-1/3 mt-6 border-white m-auto" />
    </div>

    <div class="flex ml-60">
    <img class="mt-10 ml-52" src="/images/Logo-Festival-grand.svg" alt="logo grand">
    <div class="ml-[250px] mt-24">
      <img src="/images/titre_2.svg" alt="icone-festival-2">
      <p class="font-big-shoulders-text text-[25px] w-96 mt-8 text-white ">Créer en 2021 à Strasbourg, l’éléctro moods festival est une évenement de 3 jours de musique réunissant les meilleurs artistes éléctro de la planète...</p>
    </div>
    </div>

    <p class="text-white text-[20px] ml-96 mr-96 mt-10">En 2017, la rencontre fortuite, entre trois personnes qui deviendront par la suite des amis, donne naissance à un évènement unique en son genre. Du vendredi 8 au dimanche 10 avril 20022 De nombreux artistes éléctro venus des 4 coin du monde se mettent en scènes pour créer un ballet inédit. Avec sa première édition réussie en 2021, Electro Moods Festival est devenu, à Strasbourg, l’un des rendez-vous incontournable de la Région Alsace-Champagne-Ardenne-Lorraine.
Pour Eliot Feuvrier, le créateur de cet évenment majeur, la réussite de la première édition démontre un grand intéret des festivaliers pour le genre musical qu’il souhaite mettre en avant.
    </p>
 <p class="text-white text-[20px] ml-96 mr-96 mt-3 font-light">“Pour moi l’éléctro est un style de musique qui dégage un certain rythme que l’on ne retrouve pas ailleurs”.</p>

 <p class="text-white text-[20px] ml-96 mt-3 pb-20 mr-96">Le fondateur de l’Electro Moods Festival ce dit donc confiant quand à cette deuxième édition du festival et éspère même dépasser le nombre de festivalier présent l’année dernière. 
Ainsi du 8 au 10 Avril, de nombreux concerts seront proposés à Strasbourg pour le plaisir des petits et des grands !</p> 
    
<div class="w-auto  pt-40 justify-around text-[35px] text-center font-big-shoulders-text text-white mb-10">
      <h2>
        NOS PRINCIPAUX ORGANISATEURS
      </h2>
      <hr class="border-b w-1/3 mt-6 border-white m-auto" />
    </div>
    <div class="grid grid-cols-4 place-items-center">
      <CardOrga image="/images/EliotFEUVRIER.jpg" desc="Fondateur" nom="ELIOT FEUVRIER"></CardOrga>
      <CardOrga image="/images/NATHALIELEFEVRE.jpg" desc="Vice-présidente" nom="NATHALIE LEFÈVRE"></CardOrga>
      <CardOrga image="/images/NICOLASNGUYEN.jpg" desc="Trésorier" nom="NICOLAS NGUYEN"></CardOrga>
      <CardOrga image="/images/MARTINAGNIOLY.jpg" desc="Responsable communication" nom="MARTIN AGNIOLY"></CardOrga>
      <CardOrga image="/images/MARIEPIRETTI.jpg" desc="Directrice de la programmation" nom="MARIE PIRETTI"></CardOrga>
      <CardOrga image="/images/MICHELGIGNARD.jpg" desc="Directeur technique" nom="MICHEL GIGNARD"></CardOrga>
      <CardOrga image="/images/HUGOMARCHAIS.jpg" desc="Directeur de la production" nom="HUGO MARCHAIS"></CardOrga>
      <CardOrga image="/images/ROMAINLAFONT.jpg" desc="Responsable des partenariats" nom="ROMAIN LAFONT"></CardOrga>   
    </div>



<div class="w-auto  pt-40 justify-around text-[35px] text-center font-big-shoulders-text text-white">
      <h2>
        NOS PARTENAIRES MAJEURS
      </h2>
      <hr class="border-b w-1/3 mt-6 border-white m-auto" />
    </div>

    <div class="flex justify-evenly mt-20 pb-20">
      <img src="src\components\icones\NRJ.webp" alt="">
      <img src="src\components\icones\action-lift.webp" alt="">
      <img src="src\components\icones\Pathé.webp" alt="">
      <img src="src\components\icones\Star.webp" alt="">
    </div>

</main>




</template>


<script>
import CardOrga from "../components/CardOrga.vue"

export default {
  name: "festivalView",
  components: {CardOrga}

  };
</script>