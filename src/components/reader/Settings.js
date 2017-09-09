import React, { Component } from 'react';

class Settings extends Component {
    constructor(props){
        super(props)

        this.state = {
            open: false
        }
    }

    componentDidMount() {
        this.props.changeFont()
        this.props.changeSize()
        this.props.changeMode('theme-sepia')
    }

    render() {
        return (
            <div className={`reader-settings ${this.state.open ? 'reader-settings-open': ''}`} 
                    onClick={() => this.setState({open: true})}
                    onMouseEnter={() => this.setState({open: true})}
                    onMouseLeave={() => this.setState({open: false})}>
                <i className="fa fa-font" />
                <div className="reader-settings-dropdown">
                    <div className="settings-size">
                        <p>size</p>
                    </div>
                    <div className="settings-font">
                        <p>font</p>
                    </div>
                    <div className="settings-theme">
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;