import { takeEvery } from 'redux-saga'
import { put, call} from 'redux-saga/effects'
import axios from 'axios'

import { reader as readerAction } from '../actions/constants'

export function* watchFetchReader() {
    yield takeEvery(readerAction.REQUEST, requestReader)
}

function* requestReader(action) {
    console.log('watcher akszyn', action)
    const { payload } = action
    try 
    {
        const { data } = yield call(axios.get, `http://wolnelektury.pl/media/book/html/${payload}.html`)
        yield put({type: readerAction.RECEIVE, pending: false, payload: data})
    } 
    catch (error) 
    {
        console.log('error> -- ', error)
    }
}