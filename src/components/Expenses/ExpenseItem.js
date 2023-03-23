import { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const { amount, date } = props;

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    console.log(title);
    setTitle('Changed!')
  }

  return (
    <li>
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
    </li>
  );
}

export default ExpenseItem;