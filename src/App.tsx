import React from 'react';
import './App.scss';
import { GlobalContextProvider } from "./Context/GlobalContext";
import ComponentA from "./components/gameScreen/ComponentA";
import ComponentB from './components/gameScreen/ComponentB';
import GameScreen from './components/gameScreen/GameScreen';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { RoutesArray } from './RouterConfig/routes';
import Button from './styledComponents/Button.styled';
function App() {
  return (

    <GlobalContextProvider>
      <div className="App">
        {/* <ComponentA />
        <ComponentB /> */}
        <BrowserRouter>
          <Button>Help</Button>
          <Routes>
            {RoutesArray.map(route => {
              return <Route {...route} />
            })}
          </Routes>
        </BrowserRouter>
      </div>
    </GlobalContextProvider>

  );
}

export default App;
