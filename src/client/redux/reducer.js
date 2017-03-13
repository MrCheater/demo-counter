import * as ActionTypes from './ActionTypes';

const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT_COUNT_SUCCESS:
            return {
                count: state.count + 1
            };
        case ActionTypes.DECREMENT_COUNT_SUCCESS:
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
};

export default reducer;