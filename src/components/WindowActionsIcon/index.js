import React from 'react';
import PropTypes from 'prop-types';

export default function WindowActionsIcon({ className, style }) {
    return (
        <svg className={className} style={style} width="52px" height="12px" viewBox="0 0 52 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <g stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
                <g fillRule="nonzero">
                    <circle fill="#FF6159" cx="6" cy="6" r="6" />
                    <circle fill="#FFC12F" cx="26" cy="6" r="6" />
                    <circle fill="#29C941" cx="46" cy="6" r="6" />
                </g>
            </g>
        </svg>
    );
};

WindowActionsIcon.propTypes = {
    className: PropTypes.string,
};

WindowActionsIcon.defaultProps = {
    className: undefined,
}
