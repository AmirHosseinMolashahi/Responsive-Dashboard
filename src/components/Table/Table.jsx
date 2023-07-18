import React from 'react'
import css from './Table.module.scss';
import {people} from '../../Data/info'
const Table = () => {
  return (
    <div className={css.wrapper}>
        <div className={css.container}>
            <div className={css.header}>
                <span>Recruitment progress</span>
                <button>See all</button>
            </div>
            <div className={css.table}>
                <table>
                    <thead>
                        <tr>
                            <th>full name</th>
                            <th>Professions</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            people.map((item, i) => {
                                return(
                                    <tr className={css.tableRow} key={i}>
                                        <td>{item.name}</td>
                                        <td>{item.job}</td>
                                        <td><span></span>{item.task}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Table