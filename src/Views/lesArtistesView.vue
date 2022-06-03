<template>

  <div class="flex justify-center my-10">
        
        
        <div>
            <RouterLink to="/CreateArtiste">
            <bouton2 msg="AJOUTER UN ARTISTE"
              type="submit"
            >
            </bouton2>
            </RouterLink>
        </div>
        </div> 
    <main class="grid grid-cols-3 place-items-center">

             
      
      <div v-for="artiste in listeArtiste" :key="artiste.id" class=" w-max m-10 pb-16 pt-16">
        <img class="rounded-t-2xl" :src="artiste.image" alt="">
        
        <div class="bg-black rounded-b-2xl">
            <div class=" flex justify-between p-2">
             <RouterLink :to="{ name: 'UpdateArtiste', params: { id: artiste.id } }"> <modifier/>  </RouterLink>
             <RouterLink :to="{ name: 'DeleteArtiste', params: { id: artiste.id } }"> <supprimer/> </RouterLink>
            </div>
          <p class=" font-big-shoulders-text text-center  text-[25px] text-white py-2 uppercase"> {{artiste.nom}} </p>
          
        </div>
        
    </div>

        <!--<CardArtiste v-for="artiste in listeArtiste" :key="artiste.id" :image="artiste.image" :nom="artiste.nom"></CardArtiste>-->
        <!--<CardArtiste image="/images/martin-solveig-2.jpg" nom="MARTIN SOLVEIG"></CardArtiste>
        <CardArtiste image="/images/Vladimir-Cauchemar.jpg" nom="VLADIMIR CAUCHEMAR"></CardArtiste>
        <CardArtiste image="/images/Zomboy.jpg" nom="ZOMBOY"></CardArtiste>
        <CardArtiste image="/images/Lost-frequencies.jpg" nom="LOST FREQNENCIES"></CardArtiste>
        <CardArtiste image="/images/Billx.jpg" nom="BILLX"></CardArtiste>
        <CardArtiste image="/images/Monolink.jpg" nom="MONOLINK"></CardArtiste>
        <CardArtiste image="/images/Kungs.jpg" nom="KUNGS"></CardArtiste>
        <CardArtiste image="/images/DJ-Snake-2.jpg" nom="DJ SNAKE"></CardArtiste>
        <CardArtiste image="/images/Martin-garrix.jpg" nom="MARTIN GARRIX"></CardArtiste>
        <CardArtiste image="/images/Gabry-Ponte.jpg" nom="GABRY PONTE"></CardArtiste>
        <CardArtiste image="/images/Sefa.jpg" nom="SEFA"></CardArtiste>
        <CardArtiste image="/images/Yuksek.jpg" nom="YUKSEK"></CardArtiste>
        <CardArtiste image="/images/Prezioso.jpg" nom="PREZIOSO"></CardArtiste>
        <CardArtiste image="/images/Umbree.jpg" nom="UMBREE"></CardArtiste>
        <CardArtiste image="/images/Makoto-San.jpg" nom="MAKOTO SAN"></CardArtiste>
        <CardArtiste image="/images/David-Guetta-2.jpg" nom="DAVID GUETTA"></CardArtiste>
        <CardArtiste image="/images/Marshmellow.jpg" nom="MARSHMELLOW"></CardArtiste>
        <CardArtiste image="/images/Robin-Schluz.jpg" nom="ROBIN SCHLUZ"></CardArtiste>
        <CardArtiste image="/images/Paul-Kalkbrenner.jpg" nom="PAUL KALKBRENNER"></CardArtiste>
        <CardArtiste image="/images/Tobhi.jpg" nom="TOBHI"></CardArtiste>
        <CardArtiste image="/images/Lumix.jpg" nom="LUM!X"></CardArtiste>
        <CardArtiste image="/images/Kasst.jpg" nom="KAS:ST"></CardArtiste>-->
    </main>
</template>

<script>
import CardArtiste from "../components/CardArtiste.vue"
import bouton2 from '../components/bouton2.vue'
import modifier from '../components/icones/modifier.vue'
import supprimer from '../components/icones/supprimer.vue'

// Fonctions Firestore
import { 
    getFirestore, 
    collection, 
    onSnapshot, 

} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'


// Fonctions Storage
import { 
    getStorage, 
    ref, 
    getDownloadURL, 
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'

export default {

components: {CardArtiste, bouton2, modifier, supprimer },

  data() {
    return {
      listeArtiste: [],
    };
  },
  mounted() {
    this.getArtiste();
  },
  methods: {
    async getArtiste() {
      const firestore = getFirestore();
      const dbArtiste = collection(firestore, "artiste");
      const query = await onSnapshot(dbArtiste, (snapshot) => {
        console.log("query", query);
        this.listeArtiste = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeArtiste.forEach(function (personne) {
          const storage = getStorage();
          const spaceRef = ref(storage, "artiste/" + personne.image);
          getDownloadURL(spaceRef)
            .then((url) => {
              personne.image = url;
              console.log("personne", personne);
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
        console.log("listeArtiste", this.listeArtiste);
      });
    },
  },


}
</script>