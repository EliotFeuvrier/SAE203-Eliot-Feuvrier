<template>
  <main>
    <div class="w-auto  py-20 justify-around text-[35px] text-center font-big-shoulders-text text-black">
        <h2>MODIFICATION DE L'ARTISTE</h2>
      <hr class="border-b w-1/3 mt-6 border-black m-auto" />
    </div>
    <form @submit.prevent="updateArtistes">
      <div class="grid grid-cols-2">
        <div class="mx-16">
          <img :src="imageData" />
        </div>
        <div class="flex flex-col text-Grey text-lg">
          <input
            class="my-4 pl-2 mr-8 border-2 border-Grey"
            placeholder="NOM DE L'ARTISTE"
            v-model="artiste.nom"
            required
          />
          <input
            class="my-4 "
            type="file"
            ref="file"
            id="file"
            @change="previewImage"
          />
        </div>
      </div>
      <div class="flex justify-center my-10 gap-36">
        <div>
            <bouton2 msg="MODIFIER"
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
    doc, 
    getDoc,
    getDocs, 
    addDoc, 
    updateDoc, 
    setDoc,
    deleteDoc, 
    onSnapshot, 
    query,
    orderBy
    } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

// Storage
import { 
    getStorage, 
    ref, 
    getDownloadURL, 
    uploadBytes,
    uploadString,
    deleteObject,
    listAll } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js'
import bouton2 from '../components/bouton2.vue';

export default {
  components: { bouton2 },
  name: "UpdateArtistesView",
  data() {
    return {
      imageData: null,
      listeArtistes: [],
      artiste: {
        nom: null,
        image: null,
      },
      refArtistes: null,
      imgModifiee: false,
      photoActuelle: null,
    };
  },
  mounted() {
    console.log("id artiste", this.$route.params.id);
    this.getArtistes(this.$route.params.id);
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
      });
    },

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
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    previewImage: function (event) {
      this.file = this.$refs.file.files[0];
      this.artiste.image = this.file.name;
      this.imgModifiee = true;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },

  
  
async updateArtistes() {
      if (this.imgModifiee) {
        const storage = getStorage();
        let docRef = ref(storage, "artiste/" + this.photoActuelle);
        deleteObject(docRef);
        docRef = ref(storage, "artiste/" + this.artiste.image);
        await uploadString(docRef, this.imageData, "data_url").then(
          (snapshot) => {
            console.log(
              "Uploaded a base64 string",
              this.artiste.image
            );
          }
        );
      }
      const firestore = getFirestore();
      await updateDoc(
        doc(firestore, "artiste", this.$route.params.id),
        this.artiste
      );
      this.$router.push("/lesartistes");
    },
  },
};
</script>