import { combineReducers } from 'redux'

import { books } from './books_reducer'
import { book } from './selected_book_reducer'
import { ui } from './ui_reducer'
import bookshelf from './bookshelf_reducer'
import reader from './reader_reducer'

export default combineReducers({
    booksmng: books.fetchReducer,
    navigation: ui.switchNavigation,
    selectedBook: book.fetchReducer,
    bookshelf: bookshelf,
    reader: reader
})
