/*DOM travesal - ways to access HTML document object 
1.getElementByID
2.getElementsByClassName
3.getElementByTagName
4.querySelector
5.querySelectorAll */

//textContent - used to update the text 
//1.getElementByID

let getTitle = document.getElementById("expense_tracker");
console.log("documnet title is ",getTitle); //Reading the content

getTitle.textContent="Expense Tracker APP" //Updating the content

//getTitle.innerText="New Expense Tracker App"

console.log(getTitle.textContent); // returns exactly how is it in HTML document 
console.log(getTitle.innerText); // returns all in upper case [EXPENSE TRACKER APP]
console.log("innerHTML: ",getTitle.innerHTML);

console.log("changing the color: ", getTitle.style.color="orange"); //styling - adding as inline stylining 
console.log("In JS '-' is used instead those styling properties are written in camel case ", 
    getTitle.style.fontSize="30px");

//****************************************************************************************
//2.getElementsByClassName

console.log(document.getElementsByClassName("label")); //returns HTML collection
console.log(document.getElementsByClassName("transaction-list"));

//looping through for loop

const ele1 = document.getElementsByClassName("label");
for(let i=0;i<ele1.length;i++){
    console.log(ele1[i]);
   ele1[i].style.backgroundColor="black";
}

//****************************************************************************************
//3.getElementByTagName

console.log(document.getElementsByTagName("h1")); //gives along with the class name

//****************************************************************************************
//querySelector and querySelectorAll
console.log(document.querySelector(".label")) // . is added bcoz it's a class  , only one - first element it finds
console.log(document.querySelectorAll(".label"));

//Accessing nth element

console.log(document.querySelector(".label:nth-child(1)"))

//Accessing property
console.log(document.querySelector('[role="button"]')); // outside - '' , inside = " "
console.log(document.querySelectorAll('[role="button"]'));

console.log(document.getElementById("items"))
console.log(document.querySelectorAll(".transaction-item"));
console.log(document.querySelector(".transaction-item:nth-child(1)"))


//****************************************************************************************
// ***********Traversing DOM Hirerachy************************8

//const parent = document.querySelector("#items");
//const children = parent.children
//console.log(children); //li element - output - HTML collection 
//console.log(parent) // ul element

const grandParent = document.querySelector(".main-content");
console.log("grandparent",grandParent)
const parent = grandParent.children; //children property
console.log(parent);

//Accessing children element directly 
//const children = grandParent.document.querySelectorAll(".transaction-item") // gives error bcoz grandparent is already a dom , so no need to add document here 
const children= grandParent.querySelectorAll(".transaction-item");
console.log("accessing child item from grandparent ",children)


//accessing parent element 
const singleChildren = document.querySelector(".transaction-item"); // queryselector goes from up to down 
const parent1 = singleChildren.parentElement; // parentElement property
console.log("parent element =  ", parent1)

const grandParent_1 = singleChildren.closest(".main-content"); //closest  goes from down to up
console.log(grandParent_1)

//Accessing sibling elements

const child_one = document.querySelectorAll(".transaction-item");
const child_two = document.querySelector(".transaction-item");
const child_three = child_two.nextElementSibling; 
console.log(child_three); //gives undefined because nextElementSibling works on individual element , not on nodelist , there queryselector shd be added