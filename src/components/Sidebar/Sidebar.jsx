import React, {useRef, useState } from 'react'
import css from './Sidebar.module.scss';
import * as Unicons from '@iconscout/react-unicons';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
import logout from '../../assets/logout.jpeg';

const Sidebar = () => {
  const [active, setActive] = useState('1') 
  const [menuOpend, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 640) {
      if (!menuOpened){
        return { left: "0" };
      }
    }
  };

  const menuRef = useRef()


  useOutsideAlerter(
    {
      menuRef,
      setMenuOpened
    }
  )

  return (
    <>
    <div className={css.menuIcon}
      onClick={() => setMenuOpened((prev) => !prev)}
      >
        <Unicons.UilBars />
    </div>
    <div className={css.wrapper}
      style={getMenuStyles(menuOpend)}>
        <div className={css.container}>
            <div className={css.logo}>
              <Unicons.UilReact />
              Amiwr  
            </div>

            <ul className={css.menu}>
                <li onClick={() => setActive('1')} className={`${css.item } ${active == '1' && css.active}`}><a><Unicons.UilHome />Home</a></li>
                <li onClick={() => setActive('2')} className={`${css.item } ${active == '2' && css.active}`}><a><Unicons.UilInvoice />Invoices</a></li>
                <li onClick={() => setActive('3')} className={`${css.item } ${active == '3' && css.active}`}><a><Unicons.UilUser />Clients</a></li>
                <li onClick={() => setActive('4')} className={`${css.item } ${active == '4' && css.active}`}><a><Unicons.UilShop />Products</a></li>
                <li onClick={() => setActive('5')} className={`${css.item } ${active == '5' && css.active}`}><a><Unicons.UilMessage />Messages</a></li>
                <li onClick={() => setActive('6')} className={`${css.item } ${active == '6' && css.active}`}><a><Unicons.UilSetting />Settings</a></li>
            </ul>
            <div className={css.logout}>
              <img src={logout} alt="" />
              <span><Unicons.UilSignOutAlt />Log Out</span>
            </div>

            
        </div>
    </div>
    </>
  )
}

export default Sidebar