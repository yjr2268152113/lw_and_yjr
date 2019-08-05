function marry(man,woman){
    woman.husban=man;
    man.wife=woman;
    return {
        father:man,
        month:woman
    }
}
let family=marry({
    name:'n'
},{
    name:'w'
})
console.log(family)


//           Global
//              |
//          Object(family)
//         |               |
//   Object(father) <-> Object(month)    