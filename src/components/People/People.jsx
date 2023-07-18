import React from 'react'
import css from './People.module.scss';
import * as Unicons from '@iconscout/react-unicons';
import { people } from '../../Data/info';

const People = () => {
  return (
    <div className={css.wrapper}>
        <div className={css.container}>
            <div className={css.topText}>
              <span>New Application</span>
              <span>see all</span>
            </div>
            <div className={css.list}>
              {
                people.map((item, i) => {
                  return(
                    <div className={css.items} key={i}>
                      <div className={css.image}>
                        <img src={item.picture} alt={item.name} />
                      </div>
                      <span className={css.name}>
                        <span>{item.name}</span>
                        <span>Applied for: {item.job}</span>
                      </span>
                      <div className={css.icons}>
                        <span><Unicons.UilUser /></span>
                        <span><Unicons.UilEnvelope /></span>
                        <span><Unicons.UilPhone /></span>
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

export default People