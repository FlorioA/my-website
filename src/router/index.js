import Vue from 'vue';
import VueRouter from 'vue-router';
import Presentation from '../views/Presentation.vue';
import MyProjects from '../views/MyProjects.vue';
import ContactMe from '../views/ContactMe.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Presentation',
    component: Presentation,
    meta: {
      title: 'Adrien Florio',
    },
  },
  {
    path: '/my-projects',
    name: 'MyProjects',
    component: MyProjects,
    meta: {
      title: 'Mes projets',
    },
  },
  {
    path: '/contact-me',
    name: 'ContactMe',
    component: ContactMe,
    meta: {
      title: 'Contactez-moi',
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
