import React from 'react';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
    }

    // create proxy array []
    // if this.props.view == all, set proxy array to this.props.todoList
    // if vew == remaining, set proxy to filtered array of this.props.todolist

    render() {


        let newArray = this.props.todoList;

        if (this.props.view === 'all') {
            newArray = this.props.todoList
        } else if (this.props.view === 'remaining') {
            newArray = this.props.todoList.filter(item => item.status === false)
        } else if (this.props.view === 'completed') {
            newArray = this.props.todoList.filter(item => item.status === true)
        }
        console.log(newArray)


    // change props to proxy array in map below
        let list = newArray.map((item, index) => {
            return <div key={item.id} >
                <input type="checkbox"
                    className="checkbox"
                    value={item.text}
                    checked={item.status}
                    id={item.id}
                    onClick={this.props.parentFunction} />
                <><span className="col-12 justify-content-start bg-light">
                    {item.text}
                </span>
                </>
            </div>
        });

        return (

            <>
                <div className="row  justify-content-start">
                    <div className="col-12 justify-content-start">
                        <ul >
                            {list}
                        </ul>
                    </div>
                </div>

            </>
        )
    }



}


export default ItemList;
// {() => {console.log("checked")}}