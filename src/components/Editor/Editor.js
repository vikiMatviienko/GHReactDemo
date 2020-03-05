import React from 'react';

const Editor = (props) => (
    <div>
        <div className="col-md-6 input-disabled">
			<div className="form-field _field" data-qauto="edit_bill_code_field">
				<label htmlFor="Code">Code</label>
                <input 
                className='form-el'
                type='text' 
                value={props.code}
                onChange={props.codeChanged}  />
			</div>
		</div>
		<div className="col-md-6">
			<div className="form-field _field" data-qauto="edit_bill_descript_field">
				<label htmlFor="Description">Description</label>
                <input 
                className='form-el'
                type='text' 
                value={props.description}
                onChange={props.descriptionChanged}  />

			</div>
		</div>
        <button className='btn' onClick={props.save}>Save</button>
    </div>
);

export default Editor;