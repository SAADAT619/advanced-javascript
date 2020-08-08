// What is undefinied
let pakhi;
console.log(pakhi); // It will show undefined cz pakhi variable doesn't contain any values


// Another example of undefined
function add(num1,num2){
    console.log(num1 + num2);
}
const result = add(13,82);
console.log(result); // It will show undefined cz the function doen't return anything

// Another emample of undefined by object 
const student = {name:"Saadat", phone:1212323};
console.log(student.gf);
// ---------------------------------------------------------------------

// Another example of undefiend
 function doSomething(x, y){ console.log(y)};
     doSomething(32);