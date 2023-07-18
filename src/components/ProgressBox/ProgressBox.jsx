import React from 'react'
import css from './ProgressBox.module.scss';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBox = () => {

  const boxDetail = [
    {number: 3, title : 'content designer', precnet: 78, },
    {number: 9, title : 'Node js Developer', precnet: 22, },
    {number: 1, title : 'Senior Ui Desinger', precnet: 0, },
    {number: 2, title : 'Marketing Manager', precnet: 45, },
  ]
  return (
    <div className={css.wrapper}>
        <div className={css.container}>
            <div className={css.topText}>
              <span>You need to hire</span>
              <span>see all</span>
            </div>
            <div className={css.boxes}>
              {
                boxDetail.map((item, i) => {
                  return (
                    <div className={css.box} key={i} >
                      <span>{item.number}</span>
                      <div>{item.title}</div>
                      <div className={css.progress}>
                      <CircularProgressbar value={item.precnet} text={`${item.precnet}%`} />;
                      </div>
                    </div>
                  )
                })
              }
            </div>
        </div>
    </div>
  )
}

export default ProgressBox