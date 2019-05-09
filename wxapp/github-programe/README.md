-  一套好的UI   
app.wxss  全局皮肤
- 组件思想  
   界面中相对独立的显示区块，抽成组件
    意义：界面由组件构成，不是由标签构成
    组件服用
- 项目之中 所有的请求都封装api目录下面
module.exports=
require
- wx.stopPullDownRefresh(); onLoad把生命周期交给onPullDownRefresh()
api 请求
wx.stopPullDownRdfresh()
- 复杂项目的组件数量比较多  /style/base.wxss 多个组件的都依赖的基本样式