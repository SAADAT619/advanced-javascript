// Example of calculation without map
const numbers = [3,4,5,6,7];
const output = []; 
for(let i=0; i<numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);
// ---------------------------------------------------

// map can return 3 things: 1.element, 2.index, 3.array
numbers.map(function(element,index, array){
    console.log(element, index, array);
})
// ----------------------------------------------------------

// Example of calulation with map
const result = numbers.map(function(element){
    return element*element;
})
console.log(result);
// ---------------------------------------------------------
// Exmaple of declare map like a pro
const result2 = numbers.map(x => x*x);
console.log(result2);
// ---------------------------------------------------------
// filter is used for specific purpose that means to fulfil a specific condition
// Example of filter
const bigger = numbers.filter(x => x > 5);
console.log(bigger);
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// find means when it fulfil the condition it only return one element
// Example of find
const isThere = numbers.find(x => x > 5); //here it only returns 6 not other elements becasue find only return one element after completing the condition
console.log(isThere);