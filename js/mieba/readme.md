- 小程序 诞生于react大红之后
  MVVM 组件 vant
  数据驱动界面
  Vue 语法简洁
- Vue 与小程序共异
1. 思想
  网页，new Vue({
    el:'#app'
  })
2. 组件
  Vue.component('',{
    template:'',
    data(){
      return {

      }
    }
  })
  - MVVM不需要DOM    因为DOM很低效
  找元素怎么办？  ref 属性 相当于id
  -数组
 Math.random()0-0.5  <0.5
 -组件的思想 
 vue.component('heroes',{
   props:{
     参数:参数的约束
   }，
   template:``  模板
 })
 组件化思维   :heros="heroes"
 小程序之中   src="{{item.src}}"
  :src="item.src"  
  props
  ref="allAodio"  this.$refs.allAudio
  wx:for   v-for