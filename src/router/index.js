import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */'../views/homepage.vue')
  },
  {
    path:'/playlists', 
    name: 'Playlists', 
    component: () => import(/* webpackChunkName: "playlist" */'../views/playlist.vue')
  },
  {
    path: '/track/:track_name',
    name: 'Track Detail',
    component: () => import(/* webpackChunkName: "track" */'../views/track.vue'),
    children: [
      {
        path: 'comments',
        name: 'Track\'s Comments',
        component: () => import(/* webpackChunkName: "comment" */'../views/comment.vue')
      }
    ]
  },
  {
    path: '/artist/:artist_id',
    name: 'Artist Detail',
    component: () => import(/* webpackChunkName: "artist" */'../views/artist.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
