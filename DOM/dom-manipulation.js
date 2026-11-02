/*modifying the dom elements - adding new element
- createElement() - Creates a new HTML element
- createTextNode() - Creates a text node
- appendChild() - Adds an element at the end
- append() - Adds elements or text
- prepend() - Adds content at the beginning
- remove() - Removes an element
- insertBefore() - Inserts an element before another child
- cloneNode() - Creates a copy of an existing element*/

/*creaating new element
methods
- append() - Insert at the end
- prepend() - Insert at the beginning
- before() - Insert before an element
- after() - Insert after an element
- insertBefore() - Insert before a reference node
- appendChild() - Append a child node 
*/
/*
//creating
let fruitDiv = document.createElement("div");
fruitDiv.textContent="this is new div";
console.log(fruitDiv);

//inserting 
//1. get reference
let heading=document.querySelector("h2");
//2.adding content to html
heading.after(fruitDiv);*/

let fruitDiv = document.createElement("div");
fruitDiv.textContent = "here the fruit list";

let getRefName = document.querySelector("h2");

//getRefName.insertBefore(fruitDiv);

//adding list items
//creatin div element
let fruitContainer = document.createElement("div");
fruitContainer.className="fruits";
fruitContainer.textContent="here is the fruits list "

//creating ul 
let ul = document.createElement("ul");

//creating li
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

//adding text to li

li1.textContent="Apple";
li2.textContent="Mango";
li3.textContent="papaya";

//appending li to ul

ul.append(li1,li2,li3);

//appending ul to div

fruitContainer.append(ul);

//ading whole div to hmtl 

let getrefEle = document.querySelector("h2");
getRefName.after(fruitContainer);