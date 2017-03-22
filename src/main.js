import Vue from 'vue'
import VueRouter from "vue-router"
import VueResource from "vue-resource"
import App from './App.vue'
Vue.use(VueRouter);
Vue.use(VueResource)
const Foo = {template:'<a href="tel:123456">拨打电话</a>'};
const Bar = {template:'<div id="bar"> <h1>this is bar</h1> <router-view></router-view></div>'};
const child = {template:'<div>这是路由嵌套</div>'}
const routes = [
  { path: '/', redirect: '/foo' },
  {path:'/foo',component:Foo},
  {
    path:'/bar',component:Bar,
    children:[
      {path:"/bar/child",component:child}
    ]
  }
]
const router = new VueRouter({
  routes
})
new Vue({
  router:router,
  render:h=>h(App)
}).$mount("#app")