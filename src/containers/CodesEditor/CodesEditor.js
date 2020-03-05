import React, { useState } from 'react';
import Codes from '../../components/Codes/Codes';
import Editor from '../../components/Editor/Editor';
import Modal from '../../components/UI/Modal/Modal';

const CodesEditor = (props) => {
    const [state, setCodesState] = useState({
        codes: [
            {code:'code1',description:'description1'},
            {code:'code2',description:'description2'},
            {code:'code3',description:'description3'},
            {code:'code4',description:'description4'},
            {code:'code5',description:'description5'}
        ],
        editingIndex: 1,
        editPressed: false
    });

    const editPressedHandler = (index) => {
        const updatedState = {...state};

        updatedState.editPressed = true;
        updatedState.editingIndex = index;
        setCodesState(updatedState);
    };

    const removeCodeHandler = (index) => {
        const updatedState = {...state};

        updatedState.codes.splice(index, 1);
        setCodesState(updatedState);
    };

    const onSaveHandler = (index) => {
        const updatedState = {...state};

        updatedState.editPressed = false;
        setCodesState(updatedState);
    };

    const codeChangeHandler = (event) => {
        const updatedState = {...state};

        updatedState.codes[state.editingIndex].code = event.target.value;
        setCodesState(updatedState);
    };

    const descriptionChangeHandler = (event) => {
        const updatedState = {...state};

        updatedState.codes[state.editingIndex].description = event.target.value;
        setCodesState(updatedState);
    };

    //let codes = state.codes

    return (
        <React.Fragment>
            <Modal visability={state.editPressed}>
                <Editor 
                    save={onSaveHandler} 
                    code={state.codes[state.editingIndex].code} 
                    description={state.codes[state.editingIndex].description}
                    codeChanged={(event) => codeChangeHandler(event)}
                    descriptionChanged={(event) => descriptionChangeHandler(event)} />
            </Modal>
            <Codes codes={state.codes} editCodeHandler={editPressedHandler} removeCodeHandler={removeCodeHandler} />
        </React.Fragment>
    );
};

export default CodesEditor;