import React from 'react';
import './App.css';

import { Header } from './frames/header';
import { Content } from './frames/content';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  );
};

export default App;
