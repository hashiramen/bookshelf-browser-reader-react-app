import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

//actions
import { requestSelectedBook } from '../actions/books_actions'

class Book extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {

    }

    handleBookSelection(){
        const { url } = this.props
        const newUrl = url.replace('http://wolnelektury.pl/katalog/lektura/', 'http://wolnelektury.pl/api/books/')
        this.props.requestSelectedBook(newUrl)
    }

    render() {
        const { title, cover_thumb, author, handleBookClick } = this.props
        return (
            <div className="book">
                <div className="book-thumb">
                    <img src={`http://wolnelektury.pl/media/${cover_thumb}`} draggable="false" />
                </div>
                <div className="book-title">
                    <p onClick={() => this.handleBookSelection()}>{title}</p>
                </div>
                <div className="book-author">
                    <p>{author}</p>
                </div>
            </div>
        );
    }
}

export default connect(null, { requestSelectedBook })(Book);