import React from 'react';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>

                <div className="row d-flex">
                    <div className="col-6 offset-3 ">

                        <button
                            onClick={this.props.updateButtonsView}
                            className="btn btn-warning border border-dark"
                            type="button" id="all">All Items</button>

                        <button
                            onClick={this.props.updateButtonsView}
                            className="btn btn-warning border border-dark"
                            type="button" id="completed">Completed</button>

                        <button
                            onClick={this.props.updateButtonsView}
                            className="btn btn-warning border border-dark"
                            type="button" id="remaining">Remaining</button>
                    </div>
                </div>

                <div className="row d-flex">
                    <div className="col-6 offset-3  ">
                        
                            <button
                                onClick={this.props.handleCheckAll}
                                className="btn btn-dark border border-dark"
                                type="button" id="allItems">Check All</button>
                      

                       
                            <button
                                onClick={this.props.parentFunction}
                                className="btn btn-dark border border-dark"
                                type="button" id="button-addon3">Clear All</button>

                        </div>
                    </div>

            </>
        )
    }
}


export default Buttons;