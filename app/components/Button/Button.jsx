import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button({ text, variant }) {
	return (
		<button type="button" className={variant}>{text}</button>
	);
}

Button.defaultProps = {
	variant: 'primary',
};

Button.propTypes = {
	text: PropTypes.string.isRequired,
	variant: PropTypes.oneOf('primary', 'secondary'),
};
