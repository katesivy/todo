import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
            // completed: true
          };
          this.handleList = this.handleList.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        // create input area with click handlers
        return (
            <>
                <div > 
                    <div className="row">
                        <div className="col-6 offset-3">
                            <div className="input-group mb-d">
                            <form onSubmit={(e) => this.handleSubmit(e)}>
                                <input 
                                onChange={(e) =>this.handleList(e)} 
                                value={this.state.value} 
                                type="text" 
                                className="form-control" 
                                placeholder="type to-do item"
                                aria-label="text"/> 
                                <button className="btn btn-danger"
                                    type="submit" id="button-addon">Add Item</button>
                                    </form>
                            </div>
                        </div>
                    </div>
                </div>
                

            </>
        )
    }
handleList(e) {
    this.setState({ value: e.target.value });
}
handleSubmit(e) {
    e.preventDefault();
    // log object (string) being passed in from user
    console.log(this.state);
    // send object info to cLF in app.js
    this.props.compileListFunction(this.state.value);
}
// toggle function to show/hide crossed off items

}


export default Input;   
