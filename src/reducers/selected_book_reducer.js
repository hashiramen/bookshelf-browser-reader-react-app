import _ from 'lodash'
import { book as bookAction} from '../actions/constants'


const initialState = {
    selected: {},
    pending : false
}

export const book = {}

book.fetchReducer = (state = initialState, action) => {
    const { pending, payload } = action
    switch(action.type)
    {
        case bookAction.REQUEST:
            return { ...state, pending }
        case bookAction.RECEIVE:
            return { ...state, pending, selected: { ...payload }}
        case bookAction.RESET:
            return { ...state, selected: {}}
    }

    return state
}

