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

                <table className="table table-striped text-light text-left border border-light">
                    <tbody>
                        <tr>
                            {/* <th scope="col"> */}
                            <td>
                                <input type="checkbox"
                                    className="checkbox m-3  "
                                    value=""
                                    defaultValue=""
                                    checked={item.status}
                                    id={item.id}
                                    onClick={this.props.parentFunction} />
                                     {item.text}</td>
                            {/* </th> */}
                        </tr>
                    </tbody>
                </table>
            </div>
        });

        return (
            <>
                <div className="container justify-content-start  ">
                    <div className="  justify-content-start">
                        {list}
                    </div>
                </div>

            </>
        )
    }
}


export default ItemList;
