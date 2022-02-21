import React from 'react';
import './App.scss';
import { GlobalContextProvider } from "./Context/GlobalContext";
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { RoutesArray } from './RouterConfig/routes';
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
          <BrowserRouter>
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
