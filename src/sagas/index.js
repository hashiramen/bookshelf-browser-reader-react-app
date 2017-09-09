import { watchFetchBooks } from './saga_books'
import { watchFetchSelectedBook } from './saga_selected_book'
import { watchFetchReader } from './saga_reader'

export function* rootSaga(){
    yield [
        watchFetchBooks(),
        watchFetchSelectedBook(),
        watchFetchReader()
    ]
}

export default rootSaga