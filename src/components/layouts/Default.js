import React, { Component } from 'react';
import { connect } from 'react-redux'

import Navigation from '../../containers/Navigation'

class Default extends Component {
    constructor(){
        super()
    }

    render() {
        const { font, size, mode} = this.props
        return (
            <div className={`site-wrapper ${this.props.navigation.open ? 'opened-nav': 'closed-nav'} ${mode} ${typeof font !== 'undefined' ? `font-${font.replace(' ', '-')} ${size}` : ''}`}>
                <div className="left-side">
                    <div className="navigation-wrapper">
                        <Navigation />
                    </div>
                </div>
                <div className="right-side">
                    {this.props.children}
                </div>
                <footer>
                    <div className="credits">
                        <p>© 2017-2017 <a href="http://tanomu.dk">tanomu.dk</a></p>
                    </div>
                </footer>
            </div>
        );
    }
}

function mapStateToProps({navigation, reader}){
    return {
        navigation,
        font: reader.font,
        size: reader.size,
        mode: reader.mode
    }
}

export default connect(mapStateToProps, null)(Default);