1. 三个容器 背后 100%宽度   圆点   已经拖了的进度条
2. touchStart touchMove touchEnd
3. 拖着的时候 改变 width left


```js
new Progress({
    onDrag:()=>{},
    onDragStart:()=>{},
    onDragEnd:()=>{},
    progress:0.5,
    disable
})
```
