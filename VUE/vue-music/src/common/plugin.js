let Toast = {}
Toast.install = function (Vue, options) {
    let opt = {
        defaultType: 'center' //默认显示的位置
        , duration: '1500',//持续的时间    
    }
    for (let property in options) //循环对象
    {
        opt[property] = options[property]  //使用options的配置
    }
    Vue.prototype.$toast=(tips,type)=>{
        if(type){
            opt.defaultType=type
        } if(document.getElementsByClassName('vue-toast')){
            return  //如果toast 此时在页面上是出现状态  则不再执行
        }
        let toastTpl=Vue.extend({
            template:'<div class="vue-toast toast-'+opt.defaultType+'">'+tips+'</div>'
        })
        let tpl=new toastTpl.$mount().$el
        document.body.appendChild(tpl)
        setTimeout(() => {
            document.body.removeChild(tpl)
        },opt.duration)
    }
    ['bottom','top','center'].forEach(type=>{
        Vue.property.$toast[type]=(tips)=>{
            return Vue.prototype.$toast(tips,type)
        }
    })
}