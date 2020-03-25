import React from 'react';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: []
        };
    }

    render() {
        let list = this.state.todoList.map((item, index) => {
            return <div key={index}>{item}</div>
        });
        return (
            <>
               <li >'Next Item : '{list}</li>

                {/* <div className="row">
                    <div className="col-6 offset-3 mb-3 mx-auto">
                        <div className="input-group flex-wrap"> 
                            <div className="input-group">
                                <div className="input-group-text">

                               
                              
                                    <input type="radio" aria-label="Radio button for following text input" />
                                    <input type="text" className="form-control" placeholder="to do item" aria-label="Text input with radio button"/>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}

            </>
        )
    }
}


export default ItemList;