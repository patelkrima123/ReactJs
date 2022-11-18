import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const year = props.date.getFullYear();
  return (
    <div className='expen_date'>
      <div className='expen_month'>{month}</div>
      <div className='expen_year'>{year}</div>
      <div className='expen_day'>{day}</div>
    </div>
  );
}

export default ExpenseDate;
