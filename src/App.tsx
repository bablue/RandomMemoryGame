import React from 'react';
import './App.css';
import { GlobalContextProvider } from "./Context/GlobalContext";
import ComponentA from "./components/gameScreen/ComponentA";
import ComponentB from './components/gameScreen/ComponentB';
import GameScreen from './components/gameScreen/GameScreen';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { RoutesArray } from './RouterConfig/routes';
function App() {
  return (

    <GlobalContextProvider>
      <div className="App">
        {/* <ComponentA />
        <ComponentB /> */}
        <BrowserRouter>
          <Routes>
            {RoutesArray.map(route => {
              return <Route {...route} />
            })}
            {/* <Route path='/' element={<GameScreen />} /> */}
          </Routes>
        </BrowserRouter>
        {/* <GameScreen /> */}
      </div>
    </GlobalContextProvider>

  );
}

export default App;
