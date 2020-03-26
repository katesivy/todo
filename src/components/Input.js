import React from 'react';
import ItemList from './ItemList';
import Buttons from './Buttons';

class Input extends React.Component {
    constructor(props) {
        super(props);
        // function to clear local storage 
        this.state = {
            todoList: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }


    handleSubmit(e) {
        e.preventDefault();
        const newItem = {
            text: document.getElementById("itemField").value,
            id: Date.now(),
            status: 'inProgress',
        }

        this.setState(() => {
            console.log({ todoList: [...this.state.todoList, newItem] })
            return { todoList: [...this.state.todoList, newItem] };
        })
    }


    componentDidUpdate() {
        window.localStorage.setItem('localTodoList', JSON.stringify(this.state.todoList));
    }

    componentDidMount() {
        let newList = JSON.parse(localStorage.getItem('localTodoList')) || [];
        this.setState({
            todoList: newList
        });
    }

    clearAll() {
        this.setState({
            todoList: []
        });
    }

    handleCheck(e) {
        // map through and change status
    //     this.todoList.map((item) =>
    //     key={todoList.id}
    //      if (e.target.id === todoList.id) {
    //     this.newItem.setState({ 
    //         status: 'completed' 
    //     });
    //      }
    //      console.log(newItem);
    // )
     
    
    console.log(e.target.id);
    console.log(e.target.checked);
    }

    

    render() {


        return (
            <>


                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="input-group mb-d  justify-content-start mx-auto">
                            <form onSubmit={(e) => this.handleSubmit(e)}>
                                <input
                                    value={this.state.value}
                                    id="itemField"
                                    type="text"

                                    className="form-control"
                                    placeholder="type to do item"
                                    aria-label="text"
                                    onChange={this.handleChange} />
                                <button className="btn btn-danger"
                                    type="submit"
                                    id="button-addon">Add Item</button>

            
                            </form>
                            <ItemList 
                                todoList={this.state.todoList} 
                                parentFunction={this.handleCheck.bind(this)}    
                                />
                        </div>
                    </div>
                </div>
                <Buttons parentFunction={this.clearAll.bind(this)} />

            </>
        )
    }





    // here or in <ItemList>: display each newItem in todoList

    // create way to cross off items; change value/id/completed?

    // toggle function to show/hide crossed off items

}


export default Input;


    // const styles = StyleSheet.create({
    //     lineThrough:  {
    //     textDecoration: 'line-through',
    //     textDecorationStyle: 'solid',
    //     textDecorationColor: 'grey',
    // }  
    // })



    /*
    - take items from input 
    ->hide previous item from input field
    - put in local storage
    - take items from local storage and make them display in a list
    -> cross off items in the list
        *click button next to item-->toggle the isCompleted state
        *strike out item onclick
    -> show or hide certain items (filter)
        *click for all items: show all
        *click for completed items: show completed (state=isCompleted)
        *click for remaining items: show remaining  (state=!isCompleted)
    */