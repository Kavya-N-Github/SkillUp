/*DOM travesal - ways to access HTML document object 
1.getElementByID
2.getElementsByClassName
3.getElementByTagName
4.querySelector
5.querySelectorAll */

//textContent - used to update the text 

let getTitle = document.getElementById("expense_tracker");
console.log("documnet title is ",getTitle); //Reading the content

getTitle.textContent="Expense Tracker APP" //Updating the content