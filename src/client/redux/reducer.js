export const INCREMENT_COUNT_REQUEST = 'INCREMENT_COUNT_REQUEST';
export const INCREMENT_COUNT_SUCCESS = 'INCREMENT_COUNT_SUCCESS';
export const INCREMENT_COUNT_FAILURE = 'INCREMENT_COUNT_FAILURE';
export const DECREMENT_COUNT_REQUEST = 'DECREMENT_COUNT_REQUEST';
export const DECREMENT_COUNT_SUCCESS = 'DECREMENT_COUNT_SUCCESS';
export const DECREMENT_COUNT_FAILURE = 'DECREMENT_COUNT_FAILURE';

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT_SUCCESS:
            return {
                count: state.count + 1
            };
        case DECREMENT_COUNT_SUCCESS:
            return {
                count: state.count - 1
            };
        default:
            return state;
    }
};

export default reducer;