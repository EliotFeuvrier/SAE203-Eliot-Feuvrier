import { fromJSON } from 'postcss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBy31dcBhfoK1qRQUrITKXBRwigADBuIXk",
    authDomain: "electro-moods-festival.firebaseapp.com",
    projectId: "electro-moods-festival",
    storageBucket: "electro-moods-festival.appspot.com",
    messagingSenderId: "728440578895",
    appId: "1:728440578895:web:8431b2d130c15d53fe9b3a"
  };

  // Initialize Firebase
  const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')