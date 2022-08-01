import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

// this is another way of creating a function component
const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
