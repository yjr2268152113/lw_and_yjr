<template>
  <div id="app">
   click {{$store.state.count}} tiems ,count is {{eventOrOdd}}
    <button @click="decrement">-</button>
  <button @click="increment">+</button>
   <button @click="incrementIfOdd">Increment if odd</button>
   <button @click="incrementAsync">increment async</button>
    <HelloWorld/>
  </div>
</template>

<script>
// 借
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'App',
  computed: 
    //多处要用到奇偶判断怎么办
  mapGetters(['eventOrOdd']),
  methods:mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ])
  
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
