const routes= [
  {
    path:'/',
    component: ()=> import('../layouts/MainLayout.vue'),
    children: [
      {
        path:'', component: () => import('../pages/WelcomePage.vue')
      }
    ]
  },
  {
    path: '/login',
    name:'login',
    component: ()=> import('@/pages/LoginPage.vue')
  }
]

export default routes 