import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function Logo({ version, title }) {
    return (
        <section>
            <div className="react-rainbow-logo-container">
                <div className="react-rainbow-title-version-container">
                    <div className="react-rainbow-title-container">
                        <p>{title}</p>
                    </div>
                    <p className="react-rainbow-version" aria-label="version">
                        {`Latest release: ${version}`}
                    </p>
                </div>
            </div>
            <div className="react-rainbow-divider-dotted" />
        </section>
    );
}

Logo.propTypes = {
    version: PropTypes.string.isRequired,
};

Logo.defaultProps = {
    version: '',
};
