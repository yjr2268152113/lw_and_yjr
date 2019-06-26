<template>
 <div class="container">
   <div class="header">
     <div class="left">
       <i class="el-icon-time"></i>
       <span>计划版</span>
     </div>
     <div class="cont">
       <router-link to="/home">首页</router-link>
     </div>
     <div class="right">
       <router-link to="/time-entries">计划列表</router-link>
     </div>
     </div>
     <div class="content">
       <div class="a">
    <sidebar></sidebar>
    </div>
   <div class="b">
     <router-view></router-view>
   </div>
   </div>
 </div>
</template>

<script>
import sidebar from '@/components/Sidebar'
export default {
  name: 'App',
  components:{
    sidebar
  }
 
}
</script>
<style lang="stylus" scoped>
  .container
    .header
      height 80px
      display flex 
      align-items center
      .left
        width 200px
        flex auto 
      .cont
        flex auto 
        width 200px
      .right
        flex auto
        width 200px 
    .content
      
      .a 
        width 150px
        display inline-block
      .b
        display inline-block
</style>

