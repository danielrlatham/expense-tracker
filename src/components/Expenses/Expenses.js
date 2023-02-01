import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";

const Expenses = (props) => {
  const { expenses } = props;

  let expenseItems = [];
  for (let i = 0; i < expenses.length; i++) {
    expenseItems.push(<ExpenseItem title={expenses[i].title} amount={expenses[i].amount} date={expenses[i].date}/>)
  }

  return <Card className="expenses">
      {expenseItems}
  </Card>
}

export default Expenses;