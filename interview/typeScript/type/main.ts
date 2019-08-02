console.log('hello ts')
let decLiteral:number=1;
let hexLiteral:number=0xf00d;
let user_name:string="non";
let sentnce:string=`hello ${user_name}`;
let list:number[]=[1,2,3]
let list2:Array<number>=[1,2,3]
function div(x){
    
        if (isFinite(1000/x)){
            return 'Number is Not Infinity'
        }
        return 'Number is infinity'
}