export const contextName = 'counter';

export const context = {
    aggregate: {
        name: 'counter',
        commands: [{
            name: 'increment',
            event: 'CounterIncremented'
        }, {
            name: 'decrement',
            event: 'CounterDecremented'
        }]
    },
    projection: {
        queries: [{
            name: 'count',
            callback: data => data
        }],
        eventHandlers: {
            CounterIncremented: (state) => {
                state.count++;
            },
            CounterDecremented: (state) => { state.count--; }
        },
        state: { count: 0 }
    }
};
