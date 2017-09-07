import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createSagaMiddleware from 'redux-saga'

import Default from './components/layouts/Default'
import Home from './containers/home/Home'
import Reader from './containers/Reader'

import reducers from './reducers'
import rootSaga from './sagas'

//initial actions
import { requestBooks } from './actions/books_actions'

const persistedState = localStorage.getItem('my-bookshelf') ? { bookshelf: { ...JSON.parse(localStorage.getItem('my-bookshelf')) }} : {}
const saga = createSagaMiddleware()
const store = createStore(
    reducers,
    persistedState,
    applyMiddleware(saga)
)
saga.run(rootSaga)
store.dispatch(requestBooks())
store.subscribe(() => {
    localStorage.setItem('my-bookshelf', JSON.stringify(store.getState().bookshelf))
})
console.log('APPLICATION STATE: ', store.getState())

const routing = () => (
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Default><Home/></Default>} />
            <Route path="/reader/:title" render={(props) => <Reader {...props}/>} />
        </Switch>
    </Router>
)


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                {routing()}
            </Provider>
        );
    }
}

export default App;