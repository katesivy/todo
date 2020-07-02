import React from 'react';
import ItemList from './ItemList';
// import Buttons from './Buttons';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            view: 'all',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearAll = this.clearAll.bind(this)
        this.updateButtonsView = this.updateButtonsView.bind(this)
        this.handleCheckAll = this.handleCheckAll.bind(this)
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
            return {
                todoList: [...this.state.todoList, newItem],

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
    async handleCheckAll(e) {
        console.log('clicked')
        let allItems = this.state.todoList.map((item) => {
            item.status = true
            return item;
        });
        await this.setState({
            todoList: allItems
        });
        console.log('todoList');
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
            updateList = 'completed'
        }
        await this.setState({
            view: updateList
        })

        // console.log(this.state)
    };



    render() {
        return (
            <>
                <div className="container bg bg-secondary p-5 ">
               
                    <div className="row text-center bg-secondary">
                        <div className="col-lg-6 offset-lg-3 col-sm-12 offset-sm-0 p-5 ">
                            <h1>My To-Do List</h1>
                        </div>
                    </div>

                    <div className="row d-flex p-2 text-center bg-secondary">
                        <div className="col-lg-8 offset-lg-2 col-sm-12 offset-sm-0 p-2">
                            <button
                                onClick={this.updateButtonsView}
                                className="btn btn-light bg bg-dark border border-light text-light p-2 m-2"
                                type="button" id="all">All Items</button>
                            <button
                                onClick={this.updateButtonsView}
                                className="btn btn-lightbg bg-dark border border-light text-light p-2 m-2"
                                type="button" id="completed">Completed</button>
                            <button
                                onClick={this.updateButtonsView}
                                className="btn btn-light bg bg-dark border border-light text-light p-2 m-2"
                                type="button" id="remaining">Remaining</button>
                            <button
                                onClick={this.handleCheckAll}
                                className="btn btn-light bg bg-dark border border-light text-light  p-2 m-2"
                                type="button" id="allItems">Check All</button>
                            <button
                                onClick={this.clearAll}
                                className="btn btn-light bg bg-dark border border-light text-light p-2 m-2"
                                type="button" id="button-addon3">Clear All</button>
                        </div>
                    </div>

                    <div className="row text-center bg-secondary">
                        <div className="offset-lg-3 offset-sm-0 col-lg-6 col-sm-12 text-center border border-light p-5 justify-content-start ">
                            <form onSubmit={(e) => this.handleSubmit(e)}>
                                <input
                                    value={this.state.value}
                                    id="itemField"
                                    type="text"
                                    className="form-control border border-light col-sm-12 "
                                    placeholder="type to do item"
                                    aria-label="text"
                                    onChange={this.handleChange} />
                                <button className="btn btn-dark p-2 m-2 border border-light"
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
                
            </>
        )
    }

}


export default Input;