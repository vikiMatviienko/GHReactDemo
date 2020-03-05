import React from 'react';

import classes from './Menu.module.css';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';

const Menu = (props) => (
    <div className={classes.Toolbar + ' sub-nav-wrap text-center text-md-left'}>
        <h1 className="h3 mb-md-32 py-16 px-8 p-md-0">
            Settings
        <span className="d-inline-flex align-items-center d-md-none">&nbsp;<span className="i-arrow-vert ml-12"></span></span>
        </h1>
        <div className="relative">
            <div className={classes.SubNavScroll + ' sub-nav-scrollable no-scroll'}>

                <NavigationItems
                    items={[
                        { linkText: 'Billing Codes', href: '/', active: true },
                        { linkText: 'Payment', href: '/payment' }
                    ]} />
            </div>
        </div>
    </div>
);

export default Menu;