import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

//components
import NavBookshelfListITem from '../components/NavBookshelfListItem'

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
                                        <NavBookshelfListITem key={index} { ...book } />
                                    )
                                })
    }

    renderRedirectionToBookshelf(){
        const { books } = this.props.bookshelf
        if(Object.keys(books).length > this.state.maxInTheShelf){ 
            return(<div className="nav-redirect-to-bookshelf"><Link to="/mybookshelf">Zarządzaj szafką</Link></div>) 
        }

        return ''
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="nav-bookshelf">
                <div className="inner-nav-bookshelf">
                    <h3>Ostatnio zachowane lektury</h3>
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