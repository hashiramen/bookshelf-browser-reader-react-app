import { watchFetchBooks } from './saga_books'
import { watchFetchSelectedBook } from './saga_selected_book'

export function* rootSaga(){
    yield [
        watchFetchBooks(),
        watchFetchSelectedBook()
    ]
}

export default rootSaga