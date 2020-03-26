import React from 'react';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        // this.handleClickClear = this.handleClickClear.bind(this);
        
        }


// handleClickClear(e) {
//     this.props.parentFunction();
// }


    render() {
        return (
            <>

                <div className="row d-flex">
                    <div className="col-3 ">
                        <div className="input-group-append mb-d m-2 p-2">
                            <button 
                                onClick ={this.handleClickAll}
                                className="btn btn-warning border border-dark"
                                type="button" id="button-addon">All Items</button>
                        </div>
                    </div>

                    <div className="col-3 ">
                        <div className="input-group-append mb-d m-2 p-2 flex-wrap">
                            <button 
                                onClick ={this.handleClickComplete}
                                className="btn btn-warning border border-dark"
                                type="button" id="button-addon2">Completed</button>
                        </div>
                    </div>
                    <div className="col-3 ">
                        <div className="input-group mb-d m-2 p-2">
                            <button 
                                onClick ={this.handleClickRemaining}
                                className="btn btn-warning border border-dark"
                                type="button" id="button-addon3">Remaining</button>
                             </div>
                        </div>
                        <div className="col-3 ">
                        <div className="input-group mb-d m-2 p-2">
                            <button 
                                onClick={this.props.parentFunction}
                                className="btn btn-dark border border-dark"
                                type="button" id="button-addon3">Clear All</button>

                        </div>
                    </div>
                    </div>





               


            </>
        )
    }
}


export default Buttons;