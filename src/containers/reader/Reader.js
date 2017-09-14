import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import DOMPurify from 'dompurify'

import { requestReader, changeFont, changeTheme, changeSize } from '../../actions/reader_action'
import { switchNavigation } from '../../actions/ui_events_action'

//components
import Settings from '../../components/reader/Settings'
import Burger from '../../components/navigation/Burger'

class Reader extends Component {
    constructor(props){
        super(props)

        this.handleModeChange = this.handleModeChange.bind(this)
        this.handleFontChange = this.handleFontChange.bind(this)
        this.handleSizeChange = this.handleSizeChange.bind(this)
        this.handleNavigationState = this.handleNavigationState.bind(this)
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

    handleFontChange(font){
        console.log('font changed', font)
        this.props.changeFont(font)
    }

    handleModeChange(theme){
        this.props.changeTheme(theme)
    }

    handleSizeChange(size){
        console.log('size changed')
        this.props.changeSize(size)
    }

    handleNavigationState(){
        this.props.switchNavigation()
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
            <div className="reader-wrapper">
                <div className="middle-reader-wrapper">
                    <Burger changeNavigationState={this.handleNavigationState}/>
                    <Settings changeFont={this.handleFontChange} changeMode={this.handleModeChange} changeSize={this.handleSizeChange} />
                    <div dangerouslySetInnerHTML={{ __html: html}} />
                </div>            
            </div>

        );
    }
}

function mapStateToProps({reader}) {
    return {
        reader
    }
}

export default connect(mapStateToProps, { requestReader, changeFont, changeTheme,  changeSize, switchNavigation })(Reader);