import React, { useState } from 'react';

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onExpenseSave = (expenseData) => {
    const expense = {
      ...expenseData,
      id: Math.random().toString()
    }
    props.onExpenseAdd(expense);
    setIsEditing(false);
  }

  const startEditing = () => {
    setIsEditing(true);
  }

  const stopEditing = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button type="button" onClick={startEditing}>Add Expense</button>}
      {isEditing && <ExpenseForm onExpenseSave = {onExpenseSave} onCancel={stopEditing}/>}
    </div>
  );
}

export default NewExpense;