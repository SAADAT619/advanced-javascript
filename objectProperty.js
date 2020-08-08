const students = [
    {id:34, name:"Saadat"},
    {id:37, name:"Yasar"},
    {id:52, name:"Shurovi"},
    {id:45, name:"AKTHER"},

];
const names = students.map( s => s.name);
const id = students.map(s => s.id);
const biggerAll = students.filter(s => s.id>40); //condition match korar por joto jon thakbe sobai ke return korbe
const biggerOne = students.find(s => s.id>40); //first je condition match korbe shudhu tkaei return korbe
console.log(names);
console.log(id);
console.log(biggerAll);
console.log(biggerOne);
