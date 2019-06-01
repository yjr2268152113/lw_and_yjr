<template>
  <div class="look-one">{{msg}}
      <div class="go-two" @click='goTwo'>去look2</div>
  </div>
</template>

<script>

export default {
  name: 'LookOne',
  data () {
    return {
      msg: '你瞅啥？'
    }
  },
  methods:{
      goTwo(){
          this.$router.push({name:"LookTwo",params:{id:2345}})
      }
  },
  beforeRouterEnter(to,from,next){
      console.log(from,to)
      next()
  },
  beforeRouterLeave(to,from,next){
        console.log(from,to)
      next()

  }
}
</script>

