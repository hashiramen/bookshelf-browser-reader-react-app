const books = {
    REQUEST: 'request_books',
    RECEIVE: 'receive_books',
    ERROR: 'error_books'
}

const book = {
    REQUEST: 'request_book',
    RECEIVE: 'receive_book',
    RESET: 'reset_book',
    ERROR: 'error_book'
}

const bookshelf = {
    REQUEST: 'request_bookshelf',
    ADD: 'add_bookshelf',
    REMOVE: 'remove_bookshelf',
    RECEIVE: 'receie_bookshelf',
    ERROR: 'error_bookshelf'
}


const ui = {
    SWITCH_NAVIGATION: 'switch_navigation'
}

export { books, ui, book, bookshelf }