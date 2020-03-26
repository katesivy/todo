import React, { useImperativeHandle } from 'react';

class ItemList extends React.Component {
    constructor(props) {
        super(props);
        // this.handleCheck = this.handleCheck.bind(this);
       
    }





    render() {
       let list = this.props.todoList.map((item, index) => {
            return <div key={item.id} >
               <input type="checkbox" 
               className="checkbox" 
               value={item.text} 
               checked={item.checked} 
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