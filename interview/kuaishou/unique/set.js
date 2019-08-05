var array=[1,1,2,1]
function uniqe(arr){
    // return [...new Set(arr)]
    const seen=new Map()
    return arr.filter((a)=>!seen.has(a)&&seen.set(a,1))
}
console.log(uniqe(array))