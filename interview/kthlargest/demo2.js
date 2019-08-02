function findKthLargest(nums,k){
    var arr=quick_sort(nums)
    return  arr[k-1]
}
function quick_sort(arr){
    if(arr.length<=1) return arr
    var baseDot=Math.round(arr.length/2)
    var left=[],right=[]
    var base=arr.splice(baseDot,1)[0]
    for(let i=0;i<arr.length;i++){ //O(N)
        if(arr[i]<base){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }
    return quick_sort(left).concat([base],quick_sort(right))
}
console.log(findKthLargest([2,3,6,7],3))