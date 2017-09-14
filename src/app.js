import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom'
import createSagaMiddleware from 'redux-saga'

//LAYOUTS
import Default from './components/layouts/Default'
import ReaderDefault from './components/layouts/ReaderDefault'
import BookshelfDefault from './components/layouts/BookshelfDefault'

//CONTAINERS
import Home from './containers/home/Home'
import Reader from './containers/reader/Reader'
import Bookshelf from './containers/mybookshelf/Bookshelf'

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
            <Route path="/reader/:title" render={(props) => <Default><Reader {...props}/></Default>} />
            <Route path="/mybookshelf" render={(props) => <Default><Bookshelf {...props}/></Default>} />
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