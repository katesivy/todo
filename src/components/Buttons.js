import React from 'react';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <>

                <div className="row offset-3">
                    <div className="col-2 ">
                        <div className="input-group-append mb-d m-2 p-2">
                            <button className="btn btn-warning border border-dark"
                                type="button" id="button-addon">All Items</button>
                        </div>
                    </div>

                    <div className="col-2 ">
                        <div className="input-group-append mb-d m-2 p-2 flex-wrap">
                            <button className="btn btn-warning border border-dark"
                                type="button" id="button-addon2">Completed Items</button>
                        </div>
                    </div>
                    <div className="col-2 ">
                        <div className="input-group mb-d m-2 p-2">
                            <button className="btn btn-warning border border-dark"
                                type="button" id="button-addon3">Remaining Items</button>

                        </div>
                    </div>





                </div>


            </>
        )
    }
}


export default Buttons;