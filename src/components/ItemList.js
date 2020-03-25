import React from 'react';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let list = this.props.todoList.map((item, index) => {
            return <div key={index}>{item.text}</div>
        });

        return (

            <>


                <div className="row">
                    <div className="col-6 offset-3 mb-3 mx-auto">
                        {list}
                    </div>
                </div>

            </>
        )
    }



}


export default ItemList;