import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Caterogies } from './Components/Categories/Categories';
import { Categoria } from './Components/pages/Categoria/Categoria';
import { Cart } from './Components/pages/Cart/Cart';
import { Description } from './Components/Description/Description';
import { Provider } from 'react-redux';
import store from './redux';
import './App.css'

function App() {
  return (
    <Provider store={store}>
          <BrowserRouter>
      <div className="App">
        <div className="wrapper">
          <Header/>
          <Description/>
          <div className="main">
            <Caterogies/>
            <Routes>
              <Route path='/categories/:tag' element={<Categoria/>}/>
              <Route path='/cart' element={<Cart/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
