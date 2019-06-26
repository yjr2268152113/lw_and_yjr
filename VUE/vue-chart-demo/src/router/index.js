import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import {getToken} from '@/utils/auth'
 
Vue.use(Router)
let token=getToken
const whiteList=['/login','singup','/auth-redirect']

const router= new Router({
  routes: [ 
    {
      path: '/',
      name: 'home',
      component: ()=>import ('@/pages/index')
    },
    {
      path: '/login',
      name: 'login',
      component:
      ()=>import ('@/pages/login')
    }
  ]
})
router.beforeEach((to,from,next)=>{
  if(token){
   
  }else{
    console.log(to.path)
    if(whiteList.includes(to.path)){
      next()
    }else{
      next(`/login?redirect=${to.path}`)
    }

  }
})
export default router

// to from $router  path
