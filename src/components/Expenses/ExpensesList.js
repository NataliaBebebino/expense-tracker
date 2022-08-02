import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {/* We use this map method in order to iterate through each of the elements
      of the expenses list and make this render method dynamic */}
      {props.items.map((expense) => (
        <ExpenseItem
          /* We should always have a key props for better performance, otherwise, if we make changes like adding a new item to the list, React will have to go over each element because of not having an ID */
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      ;
    </ul>
  );
};

export default ExpensesList;
