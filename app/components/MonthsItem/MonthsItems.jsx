'use client'

import { useState } from 'react'

import monthsData from '../../database/monthsData'

import styles from './MonthsItems.module.css'

export default function MonthsItems({onChange}) {
    const [activeMonth, setActiveMonth] = useState(1);

    const onClickMonth = (month) => {
      setActiveMonth(month.monthNumber);
      onChange(month.value)
    };
  
    return (
      <ol className={styles.monthList}>
        {monthsData.map((month, index) => (
          <li key={index} onClick={() => onClickMonth(month)} className={`${styles.month} ${activeMonth === month.monthNumber && styles.active}`}>
            {month.monthNumber}
          </li>
        ))}
      </ol>
    );
  }