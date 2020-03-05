import React, { memo } from 'react';

import classes from './Modal.module.css';


const Modal = (props) => {

    const ModalContent = (
        <div>
            <div className="box-content">
                <div className="box-wrap">
                    <div className="row row-gutter-s">
                        <div className={classes.Modal}>{props.children}</div>
                    </div>
                </div>
            </div>
            <div className={classes.Overlay}></div>
        </div>
    );



    return props.visability ? ModalContent : null;
};

export default memo(Modal);