import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props) {
  const { expenses } = props;

  let expenseItems = [];
  for (let i = 0; i < expenses.length; i++) {
    expenseItems.push(<ExpenseItem title={expenses[i].title} amount={expenses[i].amount} date={expenses[i].date}/>)
  }

  return <div className="expenses">
    {expenseItems}
  </div>
}

export default Expenses;