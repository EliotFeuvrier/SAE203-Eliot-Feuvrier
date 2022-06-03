<template>
  <main>
    <div class="w-auto  py-20 justify-around text-[35px] text-center font-big-shoulders-text text-black">
        <h2>SUPRESSION DE L'ARTISTE</h2>
      <hr class="border-b w-1/3 mt-6 border-black m-auto" />
    </div>
    <form @submit.prevent="deleteArtistes">
      <div class="grid grid-cols-2">
        <div class="mx-16">
          <img :src="photoActuelle" />
        </div>
        <div class="flex flex-col">
          <input
            class="flex justify-center text-Grey text-lg mb-4 gap-36"
            placeholder="Nom de l'artiste"
            v-model="artiste.nom"
            disabled
          />

        </div>
      </div>
      <div class="flex justify-center my-10 gap-36">
        <div>
            <bouton2 msg="SUPPRIMER"
              type="submit"
            >
            </bouton2>
        </div>
        <div>
            <RouterLink to="/lesArtistes">
            <bouton2 msg="ANNULER"
              type="submit"
            >
            </bouton2>
            </RouterLink>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import { getFirestore, doc, getDoc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js';

import {
  getStorage,
  ref,
  getDownloadURL,
  deleteObject,
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js';
import bouton2 from '../components/bouton2.vue';

export default {
  components: { bouton2 },
  name: "DeleteArtistesView",
  data() {
    return {
     artiste: {
        nom: null,
        image: null,
      },

      refArtistes: null,
      photoActuelle: null,
    };
  },
  mounted() {
    console.log("id artiste", this.$route.params.id);
    this.getArtistes(this.$route.params.id);
  },

  methods: {
    async getArtistes(id) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "artiste", id);
      this.refArtistes = await getDoc(docRef);
      if (this.refArtistes.exists()) {
        this.artiste = this.refArtistes.data();
        this.photoActuelle = this.artiste.image;
      } else {
        this.console.log("Artiste inexistant");
      }
      const storage = getStorage();
      const spaceRef = ref(
        storage,
        "artiste/" + this.artiste.image
      );
      getDownloadURL(spaceRef)
        .then((url) => {
          this.photoActuelle = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    async deleteArtistes() {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, "artiste", this.$route.params.id));

      const storage = getStorage();
      let docRef = ref(storage, "artiste/" + this.artiste.image);
      deleteObject(docRef);

      this.$router.push("/lesartistes");
    },
  },
};
</script>