import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({ name, value, type, placeholder, textChange }) => {
    return (
        <div className="flex flex-col mt-4">
            <input id={name} type={ type }
                   className="flex-grow h-8 px-2 border rounded border-grey-400"
                   name={ name } value={ value }
                   placeholder={ placeholder }
                   required
                   onChange={textChange} />
        </div>
    )
};

FormField.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    textChange: PropTypes.func.isRequired
};

FormField.defaultProps = {
    type: "text"
};

export default FormField;
