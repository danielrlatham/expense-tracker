import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import { useState } from 'react';

const Expenses = (props) => {
  const [expenses, setExpenses] = useState(props.expenses)
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (year) => {
    setFilteredYear(year);
    setExpenses(props.expenses.filter(expense => new Date(expense.date).getFullYear() === Number(year)))
  }

  let expenseItems = []
  for (let i = 0; i < expenses.length; i++) {
    expenseItems.push(<ExpenseItem title={expenses[i].title} amount={expenses[i].amount} date={expenses[i].date}/>)
  }


  return <Card className="expenses">
    <ExpenseFilter onChangeFilter={filterChangeHandler} selected={filteredYear}/>
    {expenseItems}
  </Card>
}

export default Expenses;