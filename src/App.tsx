import React from 'react';
import './App.scss';
import { GlobalContextProvider } from "./Context/GlobalContext";
import ComponentA from "./components/gameScreen/ComponentA";
import ComponentB from './components/gameScreen/ComponentB';
import GameScreen from './components/gameScreen/GameScreen';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { RoutesArray } from './RouterConfig/routes';
import { Button } from './styledComponents/Button.styled';
import { ThemeProvider } from 'styled-components';
import dark from './themes/dark';
import { GlobalStyles } from './styledComponents/Global.styled';
import { Card } from './styledComponents/Card.styled';


function App() {
  return (
    <ThemeProvider theme={dark}>

      <GlobalContextProvider>
        <GlobalStyles />
        <div className="App">
          {/* <ComponentA />
        <ComponentB /> */}
          <BrowserRouter>
            <Button secondary>Help</Button>
            <Card>

              <Routes>
                {RoutesArray.map(route => {
                  return <Route {...route} />
                })}
              </Routes>
            </Card>
          </BrowserRouter>
        </div>
      </GlobalContextProvider>
    </ThemeProvider>


  );
}

export default App;
