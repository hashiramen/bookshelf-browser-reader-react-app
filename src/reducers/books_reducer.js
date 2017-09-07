import _ from 'lodash'
import { books as booksAction} from '../actions/constants'


const initialState = {
    books: {},
    pending : false
}

export const books = {}

books.fetchReducer = (state = initialState, action) => {
    const { pending, payload } = action
    switch(action.type)
    {
        case booksAction.REQUEST:
            return { ...state, pending }
        case booksAction.RECEIVE:
            let booksPayload = payload 
            booksPayload = _.keyBy(booksPayload, 'title')
            return { ...state, pending, books: { ...booksPayload } }
    }

    return state
}

