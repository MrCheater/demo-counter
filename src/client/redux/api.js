import axios from 'axios';

const api = {
    incrementCounter() {
        return axios.post('/api/counter/increment');
    },

    decrementCounter() {
        return axios.post('/api/counter/decrement');
    }
};

export default api;