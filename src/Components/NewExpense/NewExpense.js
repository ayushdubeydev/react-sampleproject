import React from 'react';

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const onExpenseSave = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString()
    }
    props.onExpenseAdd(expense);
  }
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseSave = {onExpenseSave}/>
    </div>
  );
}

export default NewExpense;