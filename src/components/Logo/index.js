import React from 'react';
import PropTypes from 'prop-types';
import { QueryAt, Prismic } from 'react-prismic-cms';
import LogoImage from './logo';
import './styles.css';

export default function Logo({ version, title }) {
    return (
        <section>
            <div className="react-rainbow-logo-container">
                <Prismic repo="rainbow-doc">
                    <QueryAt path="document.type" value="rainbow-projects-header" component={LogoImage} />
                </Prismic>
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
    version: PropTypes.string,
    title: PropTypes.string,
};

Logo.defaultProps = {
    version: '',
    title: '',
};
