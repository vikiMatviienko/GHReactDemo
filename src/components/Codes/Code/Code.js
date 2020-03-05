import React from 'react';
import EditIcons from '../../EditIcons/EditIcons';
//import classes from './Code.module.css'


const Code = (props) => (
    <div className="row row-gutter-s billing-codes-row">
        <div className="col-md-5">
            <div className="form-field _field mb-0" data-qauto="first_name">
                <label htmlFor="billingCode_Key">Code</label>
                <div className="form-el" disabled="disabled" id="billingCode_Key">{props.code}</div>
            </div>
        </div>
        <div className="col-md-5">
            <div className="form-field _field mb-0" data-qauto="first_name">
                <label htmlFor="billingCode_Value">Description</label>
                <div className="form-el" disabled="disabled" id="billingCode_Value">{props.description}</div>
            </div>
        </div>
        <EditIcons editItem={props.edit} removeItem={props.removed}/>
    </div>
);

export default Code;