import React from 'react';
import PropTypes from 'prop-types';

export default function LogoImage({ response }) {
    if (response && Array.isArray(response.results)) {
        return (
            <img
                className="react-rainbow-logo-icon"
                src={response.results[0].data.logo.url}
                alt="logo" />
        );
    }
    return null;
};

LogoImage.propTypes = {
    response: PropTypes.object,
};

LogoImage.defaultProps = {
    response: null,
};
