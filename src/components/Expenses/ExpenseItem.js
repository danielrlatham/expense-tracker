import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const { title, amount, date } = props;

  const clickHandler = () => {
    console.log('Clicked!!!!!');
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate
        date={date}
      />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;