import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = props => {
  const [filterYear, setFilterYear] = useState("2021");
  const filterChanged = selectedYear => {
    setFilterYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });


  return (
    <Card className="expenses">
      <ExpenseFilter defaultYear={filterYear} onFilterChange={filterChanged} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
