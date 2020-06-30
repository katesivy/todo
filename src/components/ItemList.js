import React from 'react';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
    }

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

        let list = newArray.map((item, index) => {
            return <div key={item.id} >
                <input type="checkbox"
                    className="checkbox"
                    value=""
                    defaultValue=""
                    checked={item.status}
                    id={item.id}
                    onClick={this.props.parentFunction} />
                <><span className=" justify-content-start bg-light border border-primary  m-3">
                    {item.text}
                </span>
                </>
            </div>
        });

        return (
                <div className="row  justify-content-start">
                    <div className=" justify-content-start">
                        <ul >
                           <div className="">{list}</div>
                        </ul>
                    </div>
                </div>
          
        )
    }
}


export default ItemList;
