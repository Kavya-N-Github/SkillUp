const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

let expenses = [];
let getIndex = null;

addBtn.addEventListener("click",function(){
    let name = expenseName.value.trim();
    let amount = Number(expenseAmount.value);
    
    if(name === "" || expenseAmount.value === ""){
        alert("Please enter valid entries");
        return
    }
    if(amount <= 0 || !Number.isFinite(amount)){
        alert("Please enter Valid amount");
        return;
    }
    if(getIndex === null){
        expenses.push({
            name:name,
            amount:amount
        })
    }
    else{
        expenses[getIndex]={
            name:name,
            amount:amount
        };
        getIndex = null;
        addBtn.textContent="Add"
    }
    expenseName.value="";
    expenseAmount.value="";
    displayExpenses();
});

function displayExpenses(){
    let total = 0;
    expenseList.innerHTML="";

    expenses.forEach(function(item , index){

        total += item.amount;

        let li = document.createElement("li");
        let span = document.createElement("span");
        span.textContent=`${item.name} - ${item.amount}`;

        let editBtn = document.createElement("button");
        editBtn.textContent="Edit";
        editBtn.classList.add("editBtn");

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent="Delete";
        deleteBtn.classList.add("deleteBtn");

        editBtn.addEventListener("click",function(){
            expenseName.value = item.name;
            expenseAmount.value = item.amount;
            getIndex = index;

            addBtn.textContent="update";
        });

        deleteBtn.addEventListener("click",function(){
            expenses.splice(index,1);

            getIndex = null;
            addBtn.textContent="Add";

            displayExpenses();
        });

        li.append(span,editBtn,deleteBtn);
        expenseList.append(li);

    });

    totalAmount.textContent=total
}