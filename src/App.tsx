import React, {useState} from 'react';
import { Toaster } from 'react-hot-toast';

import './App.css';

import { Header } from './frames/header';
import { Content } from './frames/content';
import { ResultModal } from "./components/content/result_modal";
import { path_find } from "./workers/json_finder";

const App: React.FC = () => {
  var [showModal, setModal] = useState<boolean>(false);
  var [findResult, setFindeResult] = useState<Array<path_find>>([]);


  return (
    <div className="App">
      <ResultModal showModal={showModal} setModal={setModal} findResult={findResult}/>
      <Header/>
      <Content setFindeResult={setFindeResult} setModal={setModal}/>
      <Toaster />
    </div>
  );
};

export default App;
