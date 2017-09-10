import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import DOMPurify from 'dompurify'

import { requestReader, changeFont, changeTheme, changeSize } from '../../actions/reader_action'

//components
import Settings from '../../components/reader/Settings'


class Reader extends Component {
    constructor(props){
        super(props)

        this.handleModeChange = this.handleModeChange.bind(this)
    }

    componentDidMount() {
        console.log('cdm', this.props)
        this.props.requestReader(this.props.match.params.title)
    }

    componentWillReceiveProps(nextProps){
        if(this.props.match.params.title !== nextProps.match.params.title) {
            console.log('called')
            this.props.requestReader(nextProps.match.params.title)
        }
    }

    handleFontChange(){
        console.log('font changed')
    }

    handleModeChange(theme){
        console.log('mode changed', theme)
        console.log('funkcja', this.props)
        this.props.changeTheme(theme)
    }

    handleSizeChange(){
        console.log('size changed')
    }


    render() {
        const { html, pending } = this.props.reader
        if(pending) {
            return ( <div>Loading...</div>)
        }

        if(!html){
            return ( <div>Materiały dla tej książki nie zostały znalezione</div>)
        }

        const cleanHTML = DOMPurify.sanitize(html)
        return (
            <div className="middle-reader-wrapper">
                <div className="reader-burger">
                    {this.props.match.params.title}
                </div>
                <Settings changeFont={this.handleFontChange} changeMode={this.handleModeChange} changeSize={this.handleSizeChange} />
                <Link to="/">Homepage</Link>
                <br /><br />
                <div dangerouslySetInnerHTML={{ __html: cleanHTML}} />
            </div>
        );
    }
}

function mapStateToProps({reader}) {
    return {
        reader
    }
}

export default connect(mapStateToProps, { requestReader, changeFont, changeTheme,  changeSize })(Reader);