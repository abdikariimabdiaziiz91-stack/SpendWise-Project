let expenses = [];
const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const totalAmountEl = document.getElementById('total-amount');
const budgetStatusEl = document.getElementById('budget-status');
const expenseListEl = document.getElementById('expense-list');

expenseForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);
    if (name && !isNaN(amount) && amount > 0) {
        expenses.push({ name: name, amount: amount });
        expenseNameInput.value = '';
        expenseAmountInput.value = '';
        updateUI();
    }
});

function updateUI() {
    expenseListEl.innerHTML = '';
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
        let expense = expenses[i];
        total += expense.amount;
        const li = document.createElement('li');
        li.innerHTML = `<span>${expense.name}</span> <span>$${expense.amount.toFixed(2)}</span>`;
        expenseListEl.appendChild(li);
    }
    totalAmountEl.textContent = `$${total.toFixed(2)}`;
    if (total === 0) {
        budgetStatusEl.textContent = "No expenses added yet.";
        budgetStatusEl.style.color = "#333";
    } else if (total > 500) {
        budgetStatusEl.textContent = "Warning: High spending!";
        budgetStatusEl.style.color = "red";
    } else {
        budgetStatusEl.textContent = "Spending is under control.";
        budgetStatusEl.style.color = "green";
    }
}
