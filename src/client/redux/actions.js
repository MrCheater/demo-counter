import * as ActionTypes from './ActionTypes';

const actions = {
    incrementCounterRequest() {
        return {
            type : ActionTypes.INCREMENT_COUNT_REQUEST,
        }
    },

    incrementCounterSuccess(response) {
        return {
            type : ActionTypes.INCREMENT_COUNT_SUCCESS,
            response,
        }
    },

    incrementCounterFailure(error) {
        return {
            type : ActionTypes.INCREMENT_COUNT_FAILURE,
            error,
        }
    },

    incrementCounter() {
        return (dispatch, getState, { api }) => {
            dispatch(actions.incrementCounterRequest());
            return api.incrementCounter().then(
                (response) => dispatch(actions.incrementCounterSuccess(response)),
                (error) => dispatch(actions.incrementCounterFailure(error)),
            );
        }
    },

    decrementCounterRequest() {
        return {
            type : ActionTypes.DECREMENT_COUNT_REQUEST
        }
    },

    decrementCounterSuccess(response) {
        return {
            type : ActionTypes.DECREMENT_COUNT_SUCCESS,
            response,
        }
    },

    decrementCounterFailure(error) {
        return {
            type : ActionTypes.DECREMENT_COUNT_FAILURE,
            error,
        }
    },

    decrementCounter() {
        return (dispatch, getState, { api }) => {
            dispatch(actions.decrementCounterRequest());
            return api.decrementCounter().then(
                (response) => dispatch(actions.decrementCounterSuccess(response)),
                (error) => dispatch(actions.decrementCounterFailure(error)),
            );
        }
    },
};

export default actions;