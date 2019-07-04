<template>
  <div class="hello">
    <v-menu></v-menu>
    <v-button size='small' @click.native="handleClick">
      按钮
    </v-button>
  </div>
</template>

<script>
import button from '@/components/com/button'
import menu from '@/components/com/menu'
export default {
  name: 'HelloWorld',
  provide(){
    return {
      name:this.obj
    }
  },
  data () {
    return {
      obj:{
        name:'nd'
      }
    }
  },
  components:{
    'v-button':button,
    'v-menu':menu
  },
  methods:{
    handleClick(){
      // console.log(val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
