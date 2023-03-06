import React from 'react';
import { Toaster } from 'react-hot-toast';

import './App.css';

import { Header } from './frames/header';
import { Content } from './frames/content';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Toaster />
    </div>
  );
};

export default App;
