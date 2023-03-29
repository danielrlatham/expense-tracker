import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import { useState } from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  }

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return <Card className="expenses">
    <ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
    <ExpensesChart expenses={props.expenses}/>
    <ExpensesList expenses={filteredExpenses}/>
  </Card>
}

export default Expenses;