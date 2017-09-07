import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import axios from 'axios' 

import { book as bookAction } from '../actions/constants'

export function* watchFetchSelectedBook(){
    yield takeEvery(bookAction.REQUEST, requestSelectedBook)
}

function* requestSelectedBook(action){
    const { payload } = action
    try 
    {
        const { data } = yield call(axios.get, payload)
        yield put({type: bookAction.RECEIVE, pending: false, payload: data})
    } 
    catch (error) 
    {
        console.log('request selected book:', error)
    }
}