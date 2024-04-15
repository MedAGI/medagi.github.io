import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      if (to.params.year && to.params.year !== '2023') {
        next({ name: 'NotFound' });
      } else {
        next();
      }
    }
  },
  {
    path: '/:year(2023)?/organization',
    name: 'Organization',
    component: () => import('../views/OrganizationView.vue'),
    beforeEnter: (to, from, next) => {
      // Optional: Check if the year is 2023 or not provided (which means current year)
      if (to.params.year && to.params.year !== '2023') {
        // If the year parameter is something other than '2023', redirect to a 404 page or handle as needed
        next({ name: 'NotFound' });
      } else {
        // If it's '2023' or no year provided, continue to the route
        next();
      }
    }
  },
  {
    path: '/:year(2023)?/program',
    name: 'Program',
    component: () => import('../views/ProgramView.vue'),
    beforeEnter: (to, from, next) => {
      if (to.params.year && to.params.year !== '2023') {
        next({ name: 'NotFound' });
      } else {
        next();
      }
    }
  },
  {
    path: '/:year(2023)?/keynote',
    name: 'Keynote',
    component: () => import('../views/KeynoteView.vue'),
    beforeEnter: (to, from, next) => {
      if (to.params.year && to.params.year !== '2023') {
        next({ name: 'NotFound' });
      } else {
        next();
      }
    }
  },
  {
    path: '/:year(2023)?/call-for-papers',
    name: 'Call For Papers',
    component: () => import('../views/SubmissionView.vue'),
    beforeEnter: (to, from, next) => {
      if (to.params.year && to.params.year !== '2023') {
        next({ name: 'NotFound' });
      } else {
        next();
      }
    }
  },
  {
    path: '/:year(2023)?/sponsors',
    name: 'Sponsors',
    component: () => import('../views/SponsorsView.vue'),
    beforeEnter: (to, from, next) => {
      if (to.params.year && to.params.year !== '2023') {
        next({ name: 'NotFound' });
      } else {
        next();
      }
    }
  },
  {
    path: '/:year(2023)?/gallery',
    name: 'Gallery',
    component: () => import('../views/GalleryView.vue'),
    beforeEnter: (to, from, next) => {
      if (to.params.year && to.params.year !== '2023') {
        next({ name: 'NotFound' });
      } else {
        next();
      }
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
