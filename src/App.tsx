import React from 'react';
import './App.css';
import { GlobalContextProvider } from "./Context/GlobalContext";
import ComponentA from "./components/gameScreen/ComponentA";
import ComponentB from './components/gameScreen/ComponentB';
import GameScreen from './components/gameScreen/GameScreen';
function App() {
  return (

    <GlobalContextProvider>
      <div className="App">
        <ComponentA />
        <ComponentB />
        <GameScreen />
      </div>
    </GlobalContextProvider>

  );
}

export default App;
