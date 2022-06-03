import { createRouter, createWebHistory } from 'vue-router'
import componentView from '../Views/componentView.vue'
import homeView from '../Views/homeView.vue'
import mentionslegalesView from '../Views/mentionslegalesView.vue' 
import reserverView from '../Views/reserverView.vue' 
import contactView from '../Views/contactView.vue' 
import festivalView from '../Views/festivalView.vue' 
import lesartistesView from '../Views/lesArtistesView.vue' 
import programmeView from '../Views/programmeView.vue' 
import PageNotFound from '../Views/PageNotFound.vue'
import Guidedestyles from '../Views/Guidedestyles.vue'
import CreateArtisteView from '../Views/CreateArtisteView.vue'

const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'homeView', component: homeView},
        {path: '/mentionslegales', name: 'mentionslegalesView', component: mentionslegalesView},
        {path: '/reserver', name: 'reserverView', component: reserverView},
        {path: '/component', name: 'componentView', component: componentView},
        {path: '/contact', name: 'contactView', component: contactView},
        {path: '/festival', name: 'festivalView', component: festivalView},
        {path: '/lesartistes', name: 'lesartistesView', component: lesartistesView},
        {path: '/programmation', name: 'programmeView', component: programmeView},
        {path: '/:catchAll(.*)', component: PageNotFound},
        {path: '/Guidedestyles', name: 'Guidedestyles', component: Guidedestyles},
        {path: '/CreateArtiste', name: 'CreateArtiste', component: CreateArtisteView},
    ]
})

export default router