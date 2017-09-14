import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import BookshelfNav from './BookshelfNav'
//actions
import { switchNavigation } from '../actions/ui_events_action'

class Navigation extends Component {
    constructor(){
        super()

        this.state = {
            hidden: false
        }
    }

    renderIfIsOpened(){
        return(
            <div>
                <div className="nav-header">
                    header
                </div>
                <Link to="/">Homepage</Link>
                <BookshelfNav />            
            </div>
        )
    }

    renderIfIsClosed(){
        return(
            <div>

            </div>
        )
    }

    componentDidMount() {

    }

    render() {
        const { open } = this.props.navigation
        return (
            <div className={this.props.navigation.open ? 'opened-nav': 'closed-nav'}>
                {open ? this.renderIfIsOpened() : this.renderIfIsClosed()}
            </div>
        );
    }
}

function mapStateToProps({navigation}){
    return {
        navigation
    }
}

export default connect(mapStateToProps, { switchNavigation })(Navigation);