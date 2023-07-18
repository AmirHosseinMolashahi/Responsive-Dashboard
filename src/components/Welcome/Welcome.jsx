import React from 'react'
import css from './Welcome.module.scss';
import BoyLaptop from '../../assets/boy-laptop.png';

const Welcome = () => {
  return (
    <div className={css.wrapper}>
        <div className={css.container}>
            <div className={css.text}>
                <span>Hello Amiwr</span>
                <span>
                    You have 16 new application. it is a lot of work for today! So let's start it
                </span>
                <span>review it!</span>
            </div>
            <img src={BoyLaptop} alt="" />
        </div>
    </div>
  )
}

export default Welcome