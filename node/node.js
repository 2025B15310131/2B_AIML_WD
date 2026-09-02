console.log("=== VARIABLE====")
let text ="something";
console.log(text)

console.log("\n== function=====");
function abes(){
    console.log("welocme students");
    console.log("rishank")
}
abes()
function greet(fname,lname){
    console.log("hello",fname,lname);

}
greet("Rishank", "Lakhera")

function add(x,y){
    return x +y;
}
let result =add(20,30);
console.log("sum =",result);
function fullname(fname ="abes",lname="engineering"){
    return fname + " " +lname;
    
}
console.log(fullname("rishank","lakhera"));

function totalmarks( a , b, c){
    return a+b+c
}

function percentage(total_marks){
    return total_marks/300
}

let  total_marks = totalmarks(100,50,100);
console.log("marks" , total_marks)
console.log(percentage())
let count =1;
while(count<=10){
    console.log(count);
    count++
}

let a = [1,2,3,4,5 ]
let sum = 0;
for(let index=0;index<a.length; index++){
    console.log(a[index]);
    sum = sum + a[index];
}
console.log(sum)

/*let students = [
    ["rishank", "Male","M.TECH"]
    ["wassem" , "female","Lkg"]
    ["priya","male","bc"]

];
for( let i = 0; i<students.length; i++){
    for(let j =0; j<students[i].length; j++){
        console.log(students[i][j]);
    }
} */

const student={
    id:101,
    name:"utkaesh",
    course:"node.js"

};
console.log(student)



