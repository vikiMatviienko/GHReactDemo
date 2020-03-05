import React from 'react';
import classes from './EditIcons.module.css'

const EditIcons = (props) => (
    <div>
        <div className={classes.BillingCodesPanel + ' col-md-2'}>
            <span className="link" onClick = {props.editItem} data-qauto="edit_billing_ico" tabIndex="0" role="button" data-toggle="popover" data-trigger="hover focus" data-content="Edit Billing code">
                <span className="i-edit i-m"></span>
            </span>

            <span className="link _hint" onClick = {props.removeItem} data-qauto="remove_code_ico" tabIndex="0" role="button" data-toggle="popover" data-trigger="hover focus" data-content="Remove Billing Code">
                <span className="i-trash i-m"></span>
            </span>
        </div>
    </div>
);

export default EditIcons;