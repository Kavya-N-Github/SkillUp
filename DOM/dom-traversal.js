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