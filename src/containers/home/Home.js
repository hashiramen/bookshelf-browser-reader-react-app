import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import axios from 'axios'

import Book from '../Book'

({
    babel: true,
    plugins: ['jsdom-quokka-plugin']
})


class Home extends Component {
    constructor(){
        super()

        this.state = {
            limit: 50
        }
    }


    renderBooks(){
        const { books } = this.props
        return Object.values(books)
                        .slice(0, this.state.limit)
                        .map((book, index) => {
                            return(
                                <Book {...book} key={index} />
                            )
                        })
    }

    render() {
        if(this.props.pending){
            return (
            <div className="middle-wrapper">
                <div className="book-container" style={{color:'black'}}>
                    Loading..
                </div>
            </div>    
            )
        }

        return (
            <div className="middle-wrapper">
                <div className="book-container">
                    {this.renderBooks()}
                </div>
            </div>
        );
    }
}

function mapStateToProps({booksmng}){
    const { books, pending } = booksmng
    return {
        books,
        pending
    }
}

export default connect(mapStateToProps, null)(Home);