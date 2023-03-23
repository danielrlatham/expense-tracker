import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import { useState } from 'react';
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
  }

  return <Card className="expenses">
    <ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
    <ExpensesList expenses={props.expenses} filteredYear={filteredYear}/>
  </Card>
}

export default Expenses;