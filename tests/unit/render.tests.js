/* eslint-disable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */
import { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { mount } from 'enzyme';
import React from 'react';

import App from '../../render';
import reducer from '../../reducer';
/* eslint-enable */

describe('RootComponent', () => {
    it('renders count value', () => {
        const mountedReactElement = mount(
            <Provider store={createStore(state => state, { count: 1 })}>
                <App />
            </Provider>
        );

        expect(mountedReactElement.text()).to.be.equal('-1+');
    });

    it('INCREMENT_COUNT increases count', () => {
        const store = createStore(reducer, { count: 1 });
        const mountedReactElement = mount(
            <Provider store={store}>
                <App />
            </Provider>
        );

        store.dispatch({ type: 'INCREMENT_COUNT' });

        expect(mountedReactElement.text()).to.be.equal('-2+');
    });

    it('DECREMENT_COUNT decreases count', () => {
        const store = createStore(reducer, { count: 1 });
        const mountedReactElement = mount(
            <Provider store={store}>
                <App />
            </Provider>
        );

        store.dispatch({ type: 'DECREMENT_COUNT' });

        expect(mountedReactElement.text()).to.be.equal('-0+');
    });
});
