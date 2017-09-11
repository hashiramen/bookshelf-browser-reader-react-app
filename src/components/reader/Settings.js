import React, { Component } from 'react';

class Settings extends Component {
    constructor(props){
        super(props)

        this.state = {
            open: false
        }
    }

    componentDidMount() {

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
                        <span onClick={() => this.props.changeSize('')}>A</span>
                        <span onClick={() => this.props.changeSize('large-font')}>A</span>
                    </div>
                    <div className="settings-font">

                        <ul>
                            <li onClick={() => this.props.changeFont('Libre Baskerville')}>Libre Baskerville</li>
                            <li onClick={() => this.props.changeFont('Cormorant Garamond')}>Cormorant Garamond</li>
                        </ul>
                    </div>
                    <div className="settings-theme">
                        <div className="theme-variety default" onClick={() => this.props.changeMode('')}></div>
                        <div className="theme-variety sepia" onClick={() => this.props.changeMode('theme-sepia')}></div>
                        <div className="theme-variety night" onClick={() => this.props.changeMode('theme-night')}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;