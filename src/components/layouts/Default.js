import React, { Component } from 'react';

import Navigation from '../../containers/Navigation'
import SelectedBook from '../../containers/SelectedBook'

class Default extends Component {
    render() {
        return (
            <div className="site-wrapper">
                <div className="left-side">
                    <div className="navigation-wrapper">
                        <Navigation />
                    </div>
                </div>
                <div className="right-side">
                    <div className="menu-wrapper">
                        menu
                    </div>
                    <SelectedBook />
                    <div className="filter-wrapper">
                        filter
                    </div>
                    <div className="books-wrapper">
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

export default Default;