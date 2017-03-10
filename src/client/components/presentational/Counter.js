import React from 'react';

export default class Counter extends React.PureComponent {
    render() {
        return (
            <div>
                <button className="button" onClick={this.props.decrement}>-</button>
                <div className="counter">{this.props.count}</div>
                <button className="button" onClick={this.props.increment}>+</button>
            </div>
        );
    }
}

Counter.propTypes = {
    increment : React.PropTypes.func.isRequired,
    decrement : React.PropTypes.func.isRequired,
    count : React.PropTypes.number.isRequired,
};