函数的节流与防抖

阿里JS面试第一题 

- 搜索建议
  geogle suggest
  根据input 里面的值=> ajax

  keyup 没必要每次都去触发ajax  太浪费性能了
  过滤一些无效的请求，打完一个单词再去搜索
  world  word   js打完一个单词后再去搜索

  - 防抖的关键
  频繁输入时，怎么减少请求呢?
  debounce (ajax.500)  生成的一个函数，控制执行,
  停止输入时,执行一次，打完一个单词 会有意识的停一下
  setTimeout delay 之后一定执行一次。
  规定时间内  被clear掉 
  clearTimeout(func.id);
  setTimeout(setTimetout function(){
      func();
  },delay)
  句柄  不重复的对象  id属性
  前一次加了一个setTimeout  下一次再清除


  分词 