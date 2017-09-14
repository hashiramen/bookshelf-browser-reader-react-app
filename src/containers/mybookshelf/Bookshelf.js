import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

//actions
import { removeFromBookshelf } from '../../actions/bookshelf_action'

class Bookshelf extends Component {
    handleRemovingFromBookshelf(book){
        console.log('remove', book)
        this.props.removeFromBookshelf(book)
    }

    renderBookshelf(){
        const { books } = this.props.bookshelf

        return Object.values(books).reverse().map(( book, index ) => {
            const newUrl = book.href.replace('http://wolnelektury.pl/api/books/', '')
            return (
                <li key={index} className="bookshelf-item" title={`Autor: ${book.author}`}>
                    <div className="bshelf-thumb">
                        <div><img src={`http://wolnelektury.pl/media/${book.cover_thumb}`} alt={book.title}/></div>
                    </div>
                    <div className="bshelf-title">
                        <p>{book.title}</p>
                    </div>
                    <div className="bshelf-read">
                        <i className="fa fa-external-link"/><Link to={`/reader/${newUrl}`} title="Przejdź do czytnika">Czytaj</Link>
                    </div>
                    <div className="bshelf-remove">
                        <div className="bshelf-remove-inner" title="Wyrzuć z szafki" onClick={() => this.handleRemovingFromBookshelf(book)}>
                            <i className="fa fa-trash-o"/>
                        </div>
                    </div>
                </li>
            )
        })
    }

    render() {
        return (
            <div className="books-wrapper bshelf">
                <div className="menu-wrapper">
                    menu
                </div>
                <div className="mybookshelf-wrapper">
                <h1>Twoja półka z książkami <i className="fa fa-book"></i></h1>
                    <ul>
                        {this.renderBookshelf()}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps({bookshelf}){
    return {
        bookshelf
    }
}

export default connect(mapStateToProps, { removeFromBookshelf })(Bookshelf);