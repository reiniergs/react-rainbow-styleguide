/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import WindowActionsIcon from '../WindowActionsIcon'
import CopyToClipboard from '../CopyToClipboard/index';
import './styles.css';

function Header({ code }) {
    return (
        <div className="react-rainbow-editor-header">
            <WindowActionsIcon className="rainbow-m-left_x-small" />
            <CopyToClipboard text={code} />
        </div>
    );
}

Header.propTypes = {
    code: PropTypes.string.isRequired,
};

export default Header;
