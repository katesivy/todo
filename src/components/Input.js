import React from 'react';
import ItemList from './ItemList';
import Buttons from './Buttons';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            view: 'all',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const newItem = {
            text: document.getElementById("itemField").value,
            id: Date.now(),
            status: false,
        }

        this.setState(() => {
            console.log({ todoList: [...this.state.todoList, newItem] })
            return { todoList: [...this.state.todoList, newItem],
                   
            };
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
        let checkedItems = this.state.todoList.map((item) => {
            if (Number(e.target.id) === item.id) {
                item.status = e.target.checked
            }
            return item;
        });
        this.setState({
            todoList: checkedItems
        });
        console.log(checkedItems)
    }

    async updateButtonsView(e) {
        let updateList = this.state.view;
        if (e.target.id === 'all') {
            updateList = 'all'
        } else if
            (e.target.id === 'remaining') {
            updateList = 'remaining'
        } else if
            (e.target.id === 'completed') {
            updateList =  'completed'
        }
        await this.setState({
            view: updateList
        })
        
        // console.log(this.state)
    };



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
                                view={this.state.view}
                            />
                        </div>
                    </div>
                </div>
                <Buttons parentFunction={this.clearAll.bind(this)}
                    updateButtonsView={this.updateButtonsView.bind(this)}
                />

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