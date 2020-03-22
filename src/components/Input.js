import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <>
                <div >
                    <div className="row">
                        <div className="col-6 offset-3 mx-auto">
                            <div className="input-group mb-d">
                                <input type="text" className="form-control" placeholder="type to-do item"
                                    aria-label="text" />
                                <button className="btn btn-danger"
                                    type="button" id="button-addon">Add Item</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="row">
                        <div className="col-6 offset-3">
                            <div className="input-group mb-d">
                                <input type="text" className="form-control" placeholder="type to-do item"
                                    aria-label="text" />
                                <button className="btn btn-danger"
                                    type="button" id="button-addon">Add Item</button>

                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}


export default Input;   
