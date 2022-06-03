<template>
  <main>
      <div class="w-auto  py-20 justify-around text-[35px] text-center font-big-shoulders-text text-black">
        <h2>CRÉATION D'UN ARTISTE</h2>
      <hr class="border-b w-1/3 mt-6 border-black m-auto" />
    </div>

    <form @submit.prevent="createArtistes">
      <div class="grid grid-cols-2">
        <div class="mx-16">
          <img :src="imageData" />
        </div>
        <div class="flex flex-col text-Grey text-lg">
          <input
            class="my-4 pl-2 mr-8 border-2 border-Grey"
            placeholder="NOM"
            v-model="artiste.nom"
            required
          />
          <input
            class="my-4"
            type="file"
            ref="file"
            id="file"
            @change="previewImage"
          />
        </div>
      </div>
      <div class="flex justify-center my-10 gap-36">
        
        
        <div>
            <bouton2 msg="CRÉER"
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
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js';

import { getStorage, ref, uploadString } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js';
import bouton2 from '../components/bouton2.vue';

export default {
  components: { bouton2 },
  name: "CreateArtistesView",
  data() {
    return {
      imageData: null,
      listeArtistes: [],
      artiste: {
        nom: null,
        image: null,
      },
    };
  },
  mounted() {
    this.getArtistes();
  },
  methods: {
    async getArtistes() {
      const firestore = getFirestore();
      const dbArtistes = collection(firestore, "artiste");
      const q = query(dbArtistes, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtistes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("listeArtistes", this.listeArtistes);
      });
    },

    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.artiste.image = this.file.name;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

    async createArtistes() {
      const storage = getStorage();
      const refStorage = ref(
        storage,
        "artiste/" + this.artiste.image
      );
      await uploadString(refStorage, this.imageData, "data_url").then(
        (snapshot) => {
          console.log("Uploaded a base64 string");
          const db = getFirestore();
          const docRef = addDoc(collection(db, "artiste"), this.artiste);
        }
      );
      this.$router.push("/lesartistes");
    },
  },
};
</script>