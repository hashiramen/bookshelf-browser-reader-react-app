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
                    // onClick={() => this.setState({open: !this.state.open})}
                    // onMouseEnter={() => this.setState({open: true})}
                    // onMouseLeave={() => this.setState({open: false})}
                    >
                <i className="fa fa-font" onClick={() => this.setState({open: !this.state.open})} />
                <div className="reader-settings-dropdown">
                    <div className="settings-size">
                        <p>rozmiar</p>
                        <span onClick={() => console.log('small font')}>A</span>
                        <span onClick={() => console.log('huge font')}>A</span>
                    </div>
                    <div className="settings-font">
                        <p>czcionka</p>
                    </div>
                    <div className="settings-theme">
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;