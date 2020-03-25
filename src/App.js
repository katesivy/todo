import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title';
import Input from './components/Input';
import Buttons from './components/Buttons';




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }


  render() {
    return (
      <div className="App">
        <Title />
        <Input />
        <Buttons />
        

      </div>
    );
  }

  }



export default App;
