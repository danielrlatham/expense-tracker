import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = props => {
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === props.filteredYear;
  })

  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }

  return(
    <ul className="expenses-list">
    {filteredExpenses.map((expense) => {
      return <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    })}
  </ul>
  );
}

export default ExpensesList;