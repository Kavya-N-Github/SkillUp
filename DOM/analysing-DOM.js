console.log(typeof(document)) // here document referes to HTML and in js all elements are object therefore output is object 
console.dir(document) // dir() — displays an interactive representation of an object's properties.
console.log(document.title);
console.log(document.head); // gives entire head section as output
console.log(typeof(document.head));//output - object , therefore it's called as document OBJECT model
document.title = "DOM manupulation " ; // changing title - have full control
console.log(document.all); // output - HTML collection (not an array)
//even though it's not an array we can iterate over it using for of or for loop.
for(let element of document.all){
    console.log(element);
}
//there is a built in property called symbol.iterator which facilitates to iterate over the document elements

console.log("i'm at 5th index",document.all[5]); // accessing elements using index - it's not good practice.