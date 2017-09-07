import { books, book } from './constants'

const requestBooks = () => {
    return {
        type: books.REQUEST,
        pending: true
    }
}

const requestSelectedBook = (payload) => {
    return {
        type: book.REQUEST,
        pending: true,
        payload
    }
}

const resetSelectedBook = () => {
    return {
        type: book.RESET
    }
}

export { requestBooks, requestSelectedBook, resetSelectedBook }