import React from 'react';
import PropTypes from 'prop-types';


//props
const Button = ({color, text, onAdd}) => {

    return (
        <button style={{backgroundColor: color}} onClick={onAdd} className='btn'>
            {text}
        </button>
    );
};

Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
};

export default Button;
