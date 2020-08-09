// Exmaple of slice
const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2,5); //slice count the index of the array
console.log(part);
console.log(nums);

// example of splice ------------------------------------------------------------------------------------------------
// const removed = nums.splice(2,3); //splice count the number of the array mane akhane 2 er por theke 3 ta number ke sorabe
const inject = nums.splice(2,3,77);// 77 can be injected in the array
console.log(inject);
console.log(nums);

// Example of join ------------------------------------------------------------------------------------
const together = nums.join(" ");
console.log(together); // it will return string
