import React, { useState, useEffect }from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Player from './Components/Players/Player';
import playersData from './Data/MOCK_DATA.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Column, Row} from 'react-bootstrap';


function App() {
  const [players, setPlayer] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setPlayer(playersData);
  }, [])
  const handlePlayerAdd = (player) => {
    const newCart = [...cart, player];
    setCart(newCart);
  }
  return (
    <div className="App">
      <header className="App-header d-inline ml-3">
        <h2>DREAM TEAM 2021</h2>
        <h3 className="text-right mr-3">SELECT. COMPETE. WIN</h3>
      </header>
      <div className="App-body row"> 
        <div className="col-8 d-flex">
        <ul>
          {players.map(player => <Player  player={player} handlePlayerAdd = {handlePlayerAdd}></Player>)}
        </ul>
        </div>
        <div className="col-4 d-flex">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
