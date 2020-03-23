import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title';
import Input from './components/Input';
import Buttons from './components/Buttons';
import ItemList from './components/ItemList';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItems: []
    };
  }


  render() {
    return (
      <div className="App">
        <Title />
        {/* grabs info from obj entered in user input */}
        <Input compileListFunction={this.compileList}></Input>
     
        <Buttons />
        {/* add function to grab info from toggle function  */}
        <ItemList />

      </div>
    );
  }
// store items from input in array using local storage 
  async componentDidMount() {
    const todoItems = localStorage.getItem('todoItems');
    const todoList = JSON.parse(todoItems);
    // check timing since render happens before screen updates; maybe assign initial state in constructor instead
    await this.setState({ todoItems: todoList });
  }
  

  compileList = (todoItem) => {
    // use spread operator or insert props instead into : [] (can omit certain props if needed)
    this.setState({ todoItems : [...this.state.todoItems, todoItem]});
    localStorage.setItem('todoItem', JSON.stringify(this.state.todoItems));
    console.log(localStorage.getItem('todoItems')); 
  }

}

export default App;
