import { reader as readerAction } from '../actions/constants'

const initialState = {
    html: undefined,
    pending: false,
    font: 'font-default',
    mode: 'theme-default',
    size: 'size-default'
}

const reader = (state = initialState, action) => {
    const { payload, pending, type } = action
    switch(type) {
        case readerAction.REQUEST:
            return { ...state, pending }
        case readerAction.RECEIVE:
            return { ...state, pending, html: payload }
        case readerAction.CHANGE_THEME:
            return { ...state, mode: payload }
        case readerAction.CHANGE_FONT:
            return { ...state, font: payload }
        case readerAction.CHANGE_SIZE:
            return { ...state, size: payload}
    }

    return state
}

export default reader