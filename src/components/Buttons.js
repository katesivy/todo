import React from 'react';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>
                <div>
                    <div className="row d-flex">
                        <div className="col-6 offset-3 ">
                            <h3>Total Items: </h3>
                        </div>
                    </div>
                </div>
                <div className="row d-flex">
                    <div className="col-4 ">
                        <div className="input-group-append mb-d m-2 p-2">
                            <button
                                onClick={this.props.updateButtonsView}
                                className="btn btn-warning border border-dark"
                                type="button" id="all">All Items</button>
                        </div>
                    </div>

                    <div className="col-4 ">
                        <div className="input-group-append mb-d m-2 p-2 flex-wrap">
                            <button
                                onClick={this.props.updateButtonsView}
                                className="btn btn-warning border border-dark"
                                type="button" id="completed">Completed</button>
                        </div>
                    </div>
                    <div className="col-4 ">
                        <div className="input-group mb-d m-2 p-2">
                            <button
                                onClick={this.props.updateButtonsView}
                                className="btn btn-warning border border-dark"
                                type="button" id="remaining">Remaining</button>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="row ">
                        <div className="col-6 ">
                            <div className="input-group-append mb-d m-2 p-2">
                                <button
                                    onClick={this.props.handleCheckAll}
                                    className="btn btn-dark border border-dark"
                                    type="button" id="allItems">Check All</button>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="input-group mb-d m-2 p-2">
                                <button
                                    onClick={this.props.parentFunction}
                                    className="btn btn-dark border border-dark"
                                    type="button" id="button-addon3">Clear All</button>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}


export default Buttons;