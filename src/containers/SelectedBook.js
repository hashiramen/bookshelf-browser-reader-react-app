import React, { Component } from 'react';
import _ from 'lodash'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { resetSelectedBook } from '../actions/books_actions'
import { addToBookshelf, removeFromBookshelf } from '../actions/bookshelf_action'

class SelectedBook extends Component {
    constructor(){
        super()
    }

    handleAddingToBookshelf(){
        this.props.addToBookshelf(this.props.booksmng.books[this.props.selectedBook.selected.title])
    }

    handleRemovingFromBookshelf(){
        this.props.removeFromBookshelf(this.props.booksmng.books[this.props.selectedBook.selected.title])
    }

    componentWillUnmount(){
        this.props.resetSelectedBook()
    }

    render() {
        const { pending, selected } = this.props.selectedBook
        console.log('selected', selected)
        const { books } = this.props.bookshelf
        if(pending){
            return <div className="selected-book-wrapper">Loading...</div>
        }

        if(Object.keys(selected).length === 0 && selected.constructor === Object){
            return  <div className="selected-book-wrapper"></div>
        }
        const { title, cover, authors, epochs, kinds, genres, html } = selected
        const urlString = html.substring(html.lastIndexOf('/') + 1).replace('.html', '')
        return (
            <div className="selected-book-wrapper not-empty-book">
                <div className="inner-selected-wrapper">
                    <div className="selected-title">
                        <h1>{title}</h1>
                    </div>
                    <div className="selected-info">
                        <div className="selected-cover">
                            <img src={cover} />
                        </div>
                        <div className="selected-details">
                            <div className="selected-author">
                                <p><span>Autor: </span>{authors.map( author => `${author.name},`)}</p>
                            </div>
                            <div className="selected-epochs">
                                <p><span>Epoka: </span>{epochs.map( epoch => `${epoch.name},`)}</p>
                            </div>
                            <div className="selected-kinds">
                                <p><span>Gatunek: </span>{kinds.map( kind => `${kind.name},`)}</p>
                            </div>
                            <div className="selected-genres">
                                <p><span>Rodzaj: </span>{genres.map( genre => `${genre.name},`)}</p>
                            </div>
                            <div className="selected-read-online">
                                <Link to={`/reader/${urlString}`}>Czytaj online</Link>
                            </div>
                            <div className="selected-bookshelf">
                                {_.has(books, title) ? <button onClick={() => this.handleRemovingFromBookshelf()}>Usuń z szafki -</button> : 
                                                        <button onClick={() => this.handleAddingToBookshelf()}>Dodaj do szafki +</button>}
                            </div>
                        </div>
                    </div>
                    <div className="selected-tools">
                        tools
                    </div>
                    <div className="selected-back">
                        <button onClick={() => this.props.resetSelectedBook()}>Powróc do listy</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({selectedBook, booksmng, bookshelf}){
    return {
        selectedBook,
        booksmng,
        bookshelf
    }
}

export default connect(mapStateToProps, { resetSelectedBook, addToBookshelf, removeFromBookshelf })(SelectedBook);