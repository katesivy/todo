import React from 'react';



class Title extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


        };
    }
    render() {
        return (
            <>
                <div className="Container">
                    <div className="row justify-content-md-center ">
                        <div className="col-6 offset-3 md p-4">
                            <h1>To Do List</h1>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}

export default Title;

