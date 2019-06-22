<template>
    <div class="tab">
        <router-link tag="div" class="tab-item" to="/recommend">
        <sapn class="tab-link">推荐</sapn>
        </router-link>
          <router-link tag="div" class="tab-item" to="/singer">
        <sapn class="tab-link">歌手</sapn>
        </router-link>
          <router-link tag="div" class="tab-item" to="/rank">
        <sapn class="tab-link">排行</sapn>
        </router-link>
         <router-link tag="div" class="tab-item" to="/search">
        <sapn class="tab-link">搜索</sapn>
        </router-link>
    </div>
</template>
<script>
export default {
    name:'tap'
}
</script>
<style lang="stylus" scoped>
@import "../assets/css/function"
.tab
  display flex
  height px2rem(88px)
  line-height px2rem(88px)
  font-size 14px
  &-item
    flex 1
    text-align center
    .tab-link
      padding-bottom 5px
      color hsla(0, 0%, 100%, 0.5)
    &.active
      .tab-link
        color #ea2448
        border-bottom 2px solid #ea2448
</style>

