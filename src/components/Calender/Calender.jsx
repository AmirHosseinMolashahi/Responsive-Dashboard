import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import css from './Calender.module.scss';

const Calender = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  )
}

export default Calender