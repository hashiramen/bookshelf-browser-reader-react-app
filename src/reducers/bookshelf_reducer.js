import { bookshelf as bookshelfAction } from '../actions/constants'

const initialState = {
    books: {}
}

const bookshelf = (state = initialState, action) => {
    const { payload } = action
    switch(action.type){
        case bookshelfAction.ADD:
            const newBooks = { ...state, books: { ...state.books } }
            newBooks.books[payload.title] = { ...payload }
            return { ...newBooks }
        case bookshelfAction.REMOVE:
            const newRemoveBooks = { ...state }
            delete newRemoveBooks.books[payload.title]
            return { ...newRemoveBooks }
    }

    return state
}


export default bookshelf