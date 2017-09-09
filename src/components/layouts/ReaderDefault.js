import React, { Component } from 'react';
import { connect } from 'react-redux'


class ReaderDefault extends Component {
    constructor(){
        super()
    }
    
    render() {
        const { font, size, mode} = this.props
        return (
            <div className={`site-wrapper ${mode}`}>
                <div className="left-side">
                    <div className="navigation-wrapper">

                    </div>
                </div>
                <div className="right-side">
                    <div className="reader-wrapper">
                        {this.props.children}
                    </div>
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

function mapStateToProps({reader}) {
    return {
        font: reader.font,
        size: reader.size,
        mode: reader.mode
    }
}

export default connect(mapStateToProps, null)(ReaderDefault);