import React , {useState} from 'react';

import Expenseitem from './Expenseitem';
import Card from '../UI/Card';
import Expenfilter from './Expenfilter';
import './Expense.css';
const Expense = (props) => {
  const [filteryear , setfilteryear] = useState('2020');
  const filterchnagehandler = selectyear =>{
    setfilteryear(selectyear);
  };




  return (
    <Card className="expense">
      <Expenfilter selected={filteryear} onChangefilter={filterchnagehandler} />
      <Expenseitem
        id={props.items[0].id}
        name={props.items[0].name}
        tech={props.items[0].tech}
        com={props.items[0].com}
        date={props.items[0].date}
      ></Expenseitem>
      <Expenseitem
        id={props.items[1].id}
        name={props.items[1].name}
        tech={props.items[1].tech}
        com={props.items[1].com}
        date={props.items[1].date}
      ></Expenseitem>
      <Expenseitem
        id={props.items[2].id}
        name={props.items[2].name}
        tech={props.items[2].tech}
        com={props.items[2].com}
        date={props.items[2].date}
      ></Expenseitem>
      <Expenseitem
        id={props.items[3].id}
        name={props.items[3].name}
        tech={props.items[3].tech}
        com={props.items[3].com}
        date={props.items[3].date}
      ></Expenseitem>
    </Card>
  );
}

export default Expense;
