import React, { Component} from 'react';

import Menu from '../Navigation/Menu/Menu';
import classes from './Layout.module.css';

class Layout extends Component {
    render() {
        return (
            <div>
                <Menu />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </div>
        );
    }
};

export default Layout;