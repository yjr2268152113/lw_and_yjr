
// const findShort=str=>str.split(' ').map(w=>w.length).sort((a,b)=>a-b)[0];
function findShort(str){
    // return Math.min(...str.split(' ').map(w=>w.length));
    return Math.min.apply(null,str.split(' ').map(w=>w.length));
}
console.log(findShort('ni shi cai xu kun!'));

