import React from 'react';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickClear= this.handleClickClear.bind(this);
        }


handleClickClear(e) {
    this.props.parentFunction();
    // this.setState(window.localStorage.clear());
}

    render() {
        return (
            <>

                <div className="row offset-3">
                    <div className="col-2 ">
                        <div className="input-group-append mb-d m-2 p-2">
                            <button 
                                onClick ={this.handleClickAll}
                                className="btn btn-warning border border-dark"
                                type="button" id="button-addon">All Items</button>
                        </div>
                    </div>

                    <div className="col-2 ">
                        <div className="input-group-append mb-d m-2 p-2 flex-wrap">
                            <button 
                                onClick ={this.handleClickComplete}
                                className="btn btn-warning border border-dark"
                                type="button" id="button-addon2">Completed</button>
                        </div>
                    </div>
                    <div className="col-2 ">
                        <div className="input-group mb-d m-2 p-2">
                            <button 
                                onClick ={this.handleClickRemaining}
                                className="btn btn-warning border border-dark"
                                type="button" id="button-addon3">Remaining</button>
                             </div>
                        </div>
                        <div className="col-2 ">
                        <div className="input-group mb-d m-2 p-2">
                            <button 
                                onClick={this.handleClickClear}
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