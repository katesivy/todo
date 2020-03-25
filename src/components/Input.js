import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        // function to clear local storage 
        this.state = {
            todoList: [],
             
            // content: "",
            // value: ''
            // isCompleted: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    /*
    - take items from input 
    ->hide previous item from input field
    - put in local storage
    -> take items from local storage and make them display in a list
    -> cross off items in the list
        *click button next to item-->toggle the isCompleted state
        *strike out item onclick
    -> show or hide certain items (filter)
        *click for all items: show all
        *click for completed items: show completed (state=isCompleted)
        *click for remaining items: show remaining  (state=!isCompleted)
    */


    handleSubmit(e) {
        e.preventDefault();
        const newItem = document.getElementById("itemField").value;
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
        this.setState(
            {
                todoList: newList
            }
        );
    }

    

    render() {
        let list = this.state.todoList.map((item, index) => {
            return <div key={index}></div>
          });
         
         return (
            <>
          
          <div> {list}</div>
            <div className="row">
                    <div className="col-6 offset-3">
                        <div className="input-group mb-d">
                            <form onSubmit={(e) => this.handleSubmit(e)}>
                                <input
                                    value={this.state.value}
                                    id="itemField"
                                    type="text"
                                    className="form-control"
                                    placeholder="type to do item"
                                    aria-label="text" />
                                <button className="btn btn-danger"
                                    type="submit" id="button-addon">Add Item</button>
                                     
                            </form>
                            
                        </div>
                    </div>
                </div>
                
           </>
        )
    }





    // here or in <ItemList>: display each newItem in todoList

    // create way to cross off items; change value/id/completed?

    // toggle function to show/hide crossed off items

}


export default Input;   
