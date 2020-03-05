import React from 'react';
import Code from './Code/Code';



const Codes = (props) => {

    return props.codes.map((item, index) => {
        return (
            <React.Fragment>
            <div className="box-content input-disabled">
                <div className="box-wrap">
                    <div className="bill-codes-grid"><Code
                        code={item.code}
                        description={item.description}
                        key={index}
                        edit={() => props.editCodeHandler(index)}
                        removed={() => props.removeCodeHandler(index)}/>
                    </div>

                </div>
            </div>
            </React.Fragment>
        )

    });
}

export default Codes;