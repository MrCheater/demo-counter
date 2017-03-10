import { INCREMENT_COUNT_REQUEST, INCREMENT_COUNT_SUCCESS, INCREMENT_COUNT_FAILURE, DECREMENT_COUNT_REQUEST, DECREMENT_COUNT_SUCCESS, DECREMENT_COUNT_FAILURE } from './reducer';

const actions = {
    incrementCounterRequest() {
        return {
            type : INCREMENT_COUNT_REQUEST,
        }
    },

    incrementCounterSuccess(response) {
        return {
            type : INCREMENT_COUNT_SUCCESS,
            response,
        }
    },

    incrementCounterFailure(error) {
        return {
            type : INCREMENT_COUNT_FAILURE,
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
            type : DECREMENT_COUNT_REQUEST
        }
    },

    decrementCounterSuccess(response) {
        return {
            type : DECREMENT_COUNT_SUCCESS,
            response,
        }
    },

    decrementCounterFailure(error) {
        return {
            type : DECREMENT_COUNT_FAILURE,
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