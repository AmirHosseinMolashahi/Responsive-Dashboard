import React from 'react'
import css from './styles/App.module.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import ProgressBox from './components/ProgressBox/ProgressBox';
import Calender from './components/Calender/Calender';
import People from './components/People/People';
import Table from './components/Table/Table';

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Sidebar />
      <div className={css.mainDiv}>
        <Header />
        <div className={css.pageBody}>
          <div className={css.leftside}>
            <Welcome />
            <ProgressBox />
            <Table />
          </div>
          <div className={css.rightside}>
            <Calender />
            <People />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App