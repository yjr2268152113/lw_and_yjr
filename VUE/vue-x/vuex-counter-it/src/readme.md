 web 开发    两部分
 组件开发（协作）   vuex 数据管理(应用程序的数据流  难)

stroe  超市  new Vuex.stroe({
    state  100
    财务   muations 唯一修改state 的地方
    审核一下  对状态的修改是否被允许的
})
中央    地方（组件） 
读    this.$store.state.count
写    actions, mutations getters 
vuex 不是什么时候都要  大项目离不开
公司的概念
ceo  旅梦  state


- vue  实现核心 mvvm  其他的通过Vue.use()  插入进去
this.$store
this.$router
读
写？

- data() 将会被state代替
  data 只是自身状态的方法 会是actions