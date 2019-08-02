'aabaa'
function valid(str){
     var a=str.split('').reverse().join('')
    if(a===str){ return true}
    else return false

}
console.log(valid('aba'))
var  isValidChar=(c)=>{
     return /^[\w]$/.test(c)
}
var  isPalindrom=(s)=>{
    
    s=s.toLowerCase();
    let left=0,right=s.length-1;
    while(left<right){
        if(!isValidChar(s[left])){
            left++;
            continue
        }
        if(!isValidChar(s[right])){
            right--;
            continue
        }
        if(s[left]===s.right){
            left++;
            right--;
        }else{
            break;
        }
    }
    return right<=left
}
console.log(isPalindrom('aba'))
