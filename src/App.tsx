import React, { FC } from 'react';
import './App.css';

import FormDistance from "./components/Form";
interface App{

}

const App:FC<App> = () =>  (
    <div className="App">
      <FormDistance />
    </div>
  );

export default App;
