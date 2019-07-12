//快排
//  a,b(女神),c  一次
// [8,2,5(女神),9,7] 递归
function quickSort(arr){
    //lef  a
    //base 中间值
    //right b
    if(arr.length<=1) return arr
    var left=[],
    right=[],
    baseDot=Math.round(arr.length/2),
    base=arr.splice(baseDot,1)[0]// splice返回的是一个数组 [0]后变为一个数字
    for(i=0;i<arr.length;i++){
        if(arr[i]<base){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([base],quickSort(right))

}
console.log(quickSort([1,2,3,4,5]))