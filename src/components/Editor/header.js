/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from '../CopyToClipboard/index';
import './styles.css';

function Header({ code }) {
    return (
        <div className="react-rainbow-editor-header">
            <CopyToClipboard text={code} />
        </div>
    );
}

Header.propTypes = {
    code: PropTypes.string.isRequired,
};

export default Header;
