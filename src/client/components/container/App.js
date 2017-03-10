import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import Counter from '../presentational/Counter';

export function mapStateToProps(state) {
    return {
        count: state.count,
    };
}

export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        decrementCounter : actions.decrementCounter,
        incrementCounter : actions.incrementCounter,
    }, dispatch);
}

export class App extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <Counter increment = {this.props.incrementCounter} decrement = {this.props.decrementCounter} count = {this.props.count}/>
            </div>
        );
    }
}

App.propTypes = {
    incrementCounter : React.PropTypes.func.isRequired,
    decrementCounter : React.PropTypes.func.isRequired,
    count : React.PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
