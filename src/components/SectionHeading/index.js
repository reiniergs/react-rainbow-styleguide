import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function resolveTitle(title) {
    if (title === 'Getting Started') {
        return 'Overview';
    }
    return title;
}

export default function SectionHeading({ children }) {
    return (
        <header className="react-rainbow-heading-container rainbow-align-content_space-between rainbow-position_fixed">
            <h1 className="react-rainbow-title-text rainbow-color_dark-1 rainbow-font-size-heading_large">
                {resolveTitle(children)}
            </h1>
        </header>
    );
}

SectionHeading.propTypes = {
    children: PropTypes.string.isRequired,
};
