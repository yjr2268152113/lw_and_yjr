// 1.写Drawer类
// 2.构造函数的参数进行约束
// 3. enter,leave 方法
interface  IDraerConfig{
    enterDOM:HTMLElement | null
    leaveDOM:HTMLElement | null
    duration?:number
    ease?:string
}
class Drawer implements IDraerConfig{
    enterDOM:HTMLElement
    leaveDOM:HTMLElement
    _duration:number=2
    _ease:string='ease'
    enterTransition:string
    leaveTransition:string
    constructor(options){
        this.enterDOM=options.enterDOM
        this.leaveDOM=options.leaveDOM
        this.initDOMStyle();
        this.updataTransition();
    }
    enter(){
        this.enterDOM.setAttribute('style',this.enterTransition)
        this.leaveDOM.setAttribute('style',this.leaveTransition)
    }
    leave(){
        this.initDOMStyle()
    }
    initDOMStyle(){
        if(this.enterDOM&&this.leaveDOM){
            this.enterDOM.setAttribute('style',`transition:left ${this.duration}s ${this.ease};`)
            this.leaveDOM.setAttribute('style',`transition:margin-left${this.duration}s ${this.ease};`)
        }
    }
    updataTransition(){
        this.enterTransition=`left:0px transition:left ${this.duration}s ${this.ease};`
        this.leaveTransition=`transition:margin-left ${this.duration}s ${this.ease};margin-left:200px`
    }
    get duration(){
        return this._duration
    }
    set duration(duration:number){
         this._duration=duration
    }
    get ease(){
        return this._ease
    }
    set ease(ease:string){
        this._ease=ease
    }
}