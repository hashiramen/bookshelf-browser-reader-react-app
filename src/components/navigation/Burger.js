import React, { Component } from 'react';

class Burger extends Component {
    render() {
        return (
            <div className="reader-burger" onClick={() => this.props.changeNavigationState()}>
                <i className="fa fa-bars"/>
            </div>
        );
    }
}

export default Burger;