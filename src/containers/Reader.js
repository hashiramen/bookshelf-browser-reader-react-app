import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Reader extends Component {
    constructor(){
        super()
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Link to="/">Homepage</Link>
                {this.props.match.params.title}
            </div>
        );
    }
}

export default Reader;