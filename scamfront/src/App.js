import {BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import PageDetail from './components/PageDetail';
import Pageform from './components/Pageform';
import Pagelist from './components/Pagelist';
import Userlist from './components/Userlist';
import Userform from './components/Userform';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={ <Pageform/> }/>
          <Route path='/signin' exact element={ <Userform/> }/>
          <Route path='/allusers' exact element={ <Userlist/> }/>
          <Route path='/pages' exact element={ <Pagelist/> }/>
          <Route path='/page/:pageid' exact element={ <PageDetail/> }/>

          <Route path="" component={ <Pageform/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
