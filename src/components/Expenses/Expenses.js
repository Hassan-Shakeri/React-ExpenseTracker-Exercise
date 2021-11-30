import React, {useState} from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

  const [filteredYear,setFilteredYear] = useState('2020')

  const yearInputHandler = (enteredYear) => {
    setFilteredYear(enteredYear)
    console.log(enteredYear)

  } 
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  })



  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onFilter={yearInputHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;
