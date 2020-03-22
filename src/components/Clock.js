import React from 'react';
​
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
​
    }
​
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        );
    }
​
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
​
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className="row justify-content-center bg-warning">
                    <div className="col-md-6 offset-3">
                        <h1>Hello, World!</h1>
                    </div>
                </div>
                <div className="row w-50">
                    <div className="col-md-6 offset-9 bg-primary d-flex justify-content-center">
                        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                    </div>
                </div>
            </React.Fragment>
​
        );
    }
}
​
export default Clock;