import React from 'react'
import css from './Header.module.scss';
import * as Unicons from '@iconscout/react-unicons';
import User from '../../assets/user-circle.svg';

const Header = () => {
  return (
    <div className={css.wrapper}>
        <div className={css.container}>
            <span>dashbaord </span>
            <div className={css.icons}>
                <div className={css.search}>
                    <Unicons.UilSearch />
                </div>
                <div className={css.massage}>
                    <Unicons.UilEnvelope />
                </div>
                <div className={css.bell}>
                    <Unicons.UilBell />
                </div>
                <div className={css.user}>
                    <img src={User} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header