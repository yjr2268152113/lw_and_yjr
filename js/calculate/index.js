// ali 14.6 2.6
// meituan 16  4
//   S 5   A  3   B  2  C  1
let stratigies={
    'S':function(salary){return salary*5},
    'A':function(salary){
        return salary*3
    },
    'B':function(salary){
        return salary*2
    },
    'C':function(salary){
        return salary*1
    }
}
function calculate(level,salary){
    return stratigies[level](salary);
    

}
console.log(calculate('S',400))

var a=function(){}