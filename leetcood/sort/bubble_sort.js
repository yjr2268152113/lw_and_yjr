function bubbleSort(arr){
    let len=arr.length
    for(var i=0;i<len-1;i++){
        minIndex=i
        for(var j=i+1;j<len;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        //交换位置
        temp=arr[i]
        arr[i]=arr[minIndex]
        arr[minIndex]=temp
    }
    return arr;
}
// 每次让一个数排好 两两交换位置 冒泡排序
const arr=[8,2,5,8,9,7]
console.log(bubbleSort(arr))