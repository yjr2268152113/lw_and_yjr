
// 找数组中的第k大的值
function  findkthlargest(nums,k){
    if(k<0||nums.length-1) return NaN
    return nums.sort((a,b)=>b-a)[k-1]
}
const arr=[2,3,4,9,1]
console.log(findkthlargest(arr,2))