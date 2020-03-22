import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title';
import Input from './components/Input';
import Buttons from './components/Buttons';
import ItemList from './components/ItemList';



function App() {
  return (
    <div className="App">

     <Title />
     <Input />
     <Buttons />
     <ItemList />
     
    </div>
  );
}

export default App;
