import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import axios from 'axios' 

import { books as booksAction } from '../actions/constants'

export function* watchFetchBooks(){
    yield takeEvery(booksAction.REQUEST, requestBooks)
}

function* requestBooks(action){
    try 
    {
        const { data } = yield call(axios.get, 'http://wolnelektury.pl/api/books/')
        yield put({type: booksAction.RECEIVE, pending: false, payload: data})
    } 
    catch (error) 
    {
        console.log('request books error:', error)
    }
}