//线性表
function LinkeNode(val){
    this.val=val;
    this.next=null;
    
}
function addTwoNumbers(l1,l2){

}
//529
let a1=new LinkeNode(5)  //head结点

let a2=new LinkeNode(2)
let a3=new LinkeNode(9)   //未结点
a1.next=a2
a2.next=a3
let b1=new LinkeNode(9);
let b2=new LinkeNode(3);
let node=a1;  //表头
while(node){
    console.log(node.val);
    node=node.next
}