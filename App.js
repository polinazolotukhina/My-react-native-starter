import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './src/reducers';
import { Header } from './src/components/common';
import CinemaMovies from './src/components/CinemaMovies';

export default class App extends Component<{}> {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));
    return (
        <Provider store={store}>
            <View style={{ flex: 1 }}>
                <Header headerText="Tech Stack" />
                <CinemaMovies />
            </View>
        </Provider>
    );
  }
}
