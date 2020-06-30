import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import Buttons from './Buttons';

export default function Input(props) {
    const [todoList, setTodoList] = useState([]);
    const [view, setView] = useState('all');

    //  this.handleSubmit = this.handleSubmit.bind(this);
    // const buttons = ["All", "Remaining", "Completed", "Check All", "Delete"];


    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            text: document.getElementById("itemField").value,
            id: Date.now(),
            status: false,
        }
        // console.log({ todoList: [...todoList, newItem] })
        setTodoList = [...todoList, newItem]
    }


    useEffect(() => {
        window.localStorage.setItem('localTodoList', JSON.stringify(this.state.todoList));
    });

    useEffect(() => {
        let newList = JSON.parse(localStorage.getItem('localTodoList')) || [];
        setTodoList: newList
    });

    clearAll(() => {
        setTodoList: []
    })

    handleCheck((e) => {
        let checkedItems = this.state.todoList.map((item) => {
            if (Number(e.target.id) === item.id) {
                item.status = e.target.checked
            }
            return item;
        });
        setTodoList: checkedItems
        console.log(checkedItems)
    });

    async function handleCheckAll(e){
        console.log('clicked')
        let allItems = this.state.todoList.map((item) => {
            item.status = true
            return item;
        });
        // await setTodoList: allItems
        console.log('todoList');
    }

    async function updateButtonsView(e) {
        let updateList = this.state.view;
        if (e.target.id === 'all') {
            updateList = 'all'
        } else if
            (e.target.id === 'remaining') {
            updateList = 'remaining'
        } else if
            (e.target.id === 'completed') {
            updateList = 'completed'
        }
        // await setView: updateList;
      

        // console.log(this.state)
    };



   
        return (
            <>
                <div className="row">
                    <div className="col-6 offset-3 ">
                        <div className="input-group justify-content-start
                         ">
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <input
                                    //  value=e.
                                    id="itemField"
                                    type="text"
                                    className="form-control"
                                    placeholder="type to do item"
                                    aria-label="text"
                                    onChange={setItem(e.target.value)} />
                                <button className="btn btn-danger"
                                    type="submit"
                                    id="button-addon">Add Item</button>

                            </form>
                            <ItemList
                                todoList={todoList}
                                // parentFunction={handleCheck}
                                view={view}
                            />

                        </div>
                        <div className="p-3">
                            <p>Total Items: {todoList.length}</p>
                        </div>
                    </div>
                </div>

                <div className="input-group-append mb-d m-2 p-2">
                    <button
                        onClick={this.props.updateButtonsView}
                        className="btn btn-warning border border-dark"
                        type="button" id="all">All Items</button>
                </div>
               
                <div className="input-group-append mb-d m-2 p-2 flex-wrap">
                    <button
                        onClick={props.updateButtonsView}
                        className="btn btn-warning border border-dark"
                        type="button" id="completed">Completed</button>
                  
                    <div className="input-group mb-d m-2 p-2">
                        <button
                            onClick={props.updateButtonsView}
                            className="btn btn-warning border border-dark"
                            type="button" id="remaining">Remaining</button>
                    </div>

                    <div className="input-group-append mb-d m-2 p-2">
                        <button
                            onClick={props.handleCheckAll}
                            className="btn btn-dark border border-dark"
                            type="button" id="allItems">Check All</button>
                    </div>


                    <div className="input-group mb-d m-2 p-2">
                        <button
                            onClick={props.parentFunction}
                            className="btn btn-dark border border-dark"
                            type="button" id="button-addon3">Clear All</button>
                    </div>
                </div>





                <Buttons parentFunction={this.clearAll.bind(this)}
                    updateButtonsView={this.updateButtonsView.bind(this)}
                    handleCheckAll={this.handleCheckAll.bind(this)}
                />


            </>
        )
    }





    // here or in <ItemList>: display each newItem in todoList

    // create way to cross off items; change value/id/completed?

    // toggle function to show/hide crossed off items







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