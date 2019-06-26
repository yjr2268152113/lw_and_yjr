<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">已有时长</h1>
    </div>

    <div class="panel-body">
      <h1 class="text-center">0 小时</h1>
    </div>

  </div>
</template>
<script>
    export default {
      name : 'Sidebar',
      computed: {
        time() {
          return this.$store.state.totalTime
        }
      }
    }
</script>
<style lang="stylus" scoped>
.panel .panel-default
   width 250px
   height 140px
   .panel-heading
      padding 10px 15px
      border-bottom  1px solid #333333
      border-top-left-radius 3px
      border-top-right-radius 3px
      background-color #eeeeee
      .text-center
        text-align center
        font-size 36px
    .panel-body
      padding 15px



</style>

