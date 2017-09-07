import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class BookshelfNav extends Component {
    constructor(){
        super()

        this.state = {
            maxInTheShelf: 12
        }
    }

    renderSavedBooks(){
        const { books } = this.props.bookshelf
        return Object.values(books)
                                .reverse()
                                .slice(0, this.state.maxInTheShelf)
                                .map( (book, index) => {
                                    return (
                                        <li key={index}>
                                            <div className="nav-img-book-container">
                                                <img src={`http://wolnelektury.pl/media/${book.cover_thumb}`} draggable="false"/>
                                            </div>
                                            <p>{book.title}</p>
                                        </li>
                                    )
                                })
    }

    renderRedirectionToBookshelf(){
        const { books } = this.props.bookshelf
        if(Object.keys(books).length > this.state.maxInTheShelf){ 
            return(<div className="nav-redirect-to-bookshelf"><Link to="/mybookshelf">Pokaż resztę</Link></div>) 
        }

        return ''
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="nav-bookshelf">
                <div className="inner-nav-bookshelf">
                    <h3>Your saved books</h3>
                    <ul className="nav-bookshelf-list">
                        {this.renderSavedBooks()}
                    </ul>
                    {this.renderRedirectionToBookshelf()}
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

export default connect(mapStateToProps, null)(BookshelfNav);