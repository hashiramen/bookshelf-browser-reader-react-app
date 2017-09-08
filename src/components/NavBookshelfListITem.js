import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavBookshelfListItem extends Component {
    constructor(props){
        super(props)

        this.state = {
            hovered: false
        }
    }

    handleListItemMouseEnter(){
        this.setState({
            hovered: !this.state.hovered
        })
    }

    handleListItemMouseLeave(){
        this.setState({
            hovered: !this.state.hovered
        })   
    }

    render() {
        const { cover_thumb, title} = this.props
        return (
            <li onMouseEnter={() => this.handleListItemMouseEnter()} 
                onMouseLeave={() => this.handleListItemMouseLeave()} 
                className={this.state.hovered ? 'list-item-show-tooltip': ''}>
                <div className="nav-img-book-container">
                    <img src={`http://wolnelektury.pl/media/${cover_thumb}`} draggable="false"/>
                </div>
                <p>{title}</p>
                <div className="list-item-tooltip">
                    <Link to="/reader/url">zacznij czytać</Link>
                </div>
            </li>
        );
    }
}

export default NavBookshelfListItem;