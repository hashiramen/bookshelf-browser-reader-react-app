import { bookshelf } from './constants'

const addToBookshelf = (payload) => {
    return {
        type: bookshelf.ADD,
        payload
    }
}

const removeFromBookshelf = (payload) => {
    return {
        type: bookshelf.REMOVE,
        payload
    }
}

export { addToBookshelf, removeFromBookshelf }