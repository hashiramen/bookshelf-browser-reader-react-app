import { bookshelf } from './constants'

const addToBookshelf = (payload) => {
    return {
        type: bookshelf.ADD,
        payload
    }
}

export { addToBookshelf }