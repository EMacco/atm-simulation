import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Button = ({text, enabled, style}) => {
    return (
        <Fragment>
            {
                enabled ? (
                    <button type="submit"
                            className={style}>
                        {text}
                    </button>
                ) : (
                    <span
                        className="bg-gray-500 text-center text-white text-sm font-semibold py-2 px-4 rounded disabled">
                                {text}
                            </span>
                )
            }
        </Fragment>
    )
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    enabled: PropTypes.bool,
    style: PropTypes.string,
};

Button.defaultProps = {
    enabled: true,
    style: 'bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold py-2 px-4 rounded',
};

export default Button;
