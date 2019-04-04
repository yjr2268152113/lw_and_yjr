const people=[
    {age:'46',name:'roger'},
    {age:'26',name:'don'},
    {age:'56',name:'ns'}
]
var orderPeople=function(people){
    return people.sort((a,b)=>{
        return a.age-b.age>0
    })
}
console.log(orderPeople(people))