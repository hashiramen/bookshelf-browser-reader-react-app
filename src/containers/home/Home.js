import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import _ from 'lodash'
import axios from 'axios'

import Book from '../Book'
import SelectedBook from '../../containers/SelectedBook'
import Burger from '../../components/navigation/Burger'

import { switchNavigation } from '../../actions/ui_events_action'

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
        
        this.handleScroll = this.handleScroll.bind(this)
        this.handleNavigationState = this.handleNavigationState.bind(this)
    }

    componentDidMount() {
        const div = ReactDOM.findDOMNode(this.refs.bookContainer)
        console.log(div)
        div.addEventListener('scroll', _.debounce(this.handleScroll, 150));
    }

    componentWillUnmount() {
  
    }

    onContainerRef(element){
        console.log('scrolled', element)
        return element
    }

    handleNavigationState(){
        this.props.switchNavigation()
    }

    handleScroll(e){
        console.log('scruled', e)
        if(typeof e !== 'undefined'){
            const el = e.target
            const win = window
            const offset = 550
            console.dir(el.scrollHeight - el.scrollTop)
            console.dir(el)

            if(el.clientHeight + offset > el.scrollHeight - el.scrollTop){
                console.log('is bigger number')
                this.setState({
                    limit: this.state.limit + 75
                })
            }
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
                <div>
                    <div className="menu-wrapper">
                        <Burger changeNavigationState={this.handleNavigationState}/>
                    </div>
                    <SelectedBook />
                    <div className="filter-wrapper">
                        filter
                    </div>   
                    <div className="books-wrapper" ref="bookContainer">
                        <div className="middle-wrapper">
                            <div className="book-container" style={{color:'black'}} >
                                Loading..
                            </div>
                        </div>   
                    </div> 
                </div>
            )
        }

        const books = this.renderBooks()
        console.log('buks', books)
        return (
            <div>
                <div className="menu-wrapper">
                    <Burger changeNavigationState={this.handleNavigationState}/>
                </div>
                <SelectedBook />
                <div className="filter-wrapper">
                    filter
                </div>    
                <div className="books-wrapper" ref="bookContainer" onScroll={() => this.handleScroll()}>
                    <div className="middle-wrapper">
                        <div className="book-container">
                                {books}
                        </div>
                    </div>
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

export default connect(mapStateToProps, {switchNavigation})(Home);