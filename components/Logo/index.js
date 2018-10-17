'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Logo;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var projectName = process.env.NODE_ENV.projectName;

function Logo(_ref) {
    var version = _ref.version,
        title = _ref.title;

    return _react2.default.createElement(
        'section',
        null,
        _react2.default.createElement(
            'div',
            { className: 'react-rainbow-logo-container' },
            _react2.default.createElement(
                'div',
                { className: 'react-rainbow-title-version-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'react-rainbow-title-container' },
                    _react2.default.createElement(
                        'p',
                        null,
                        title
                    )
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'react-rainbow-version', 'aria-label': 'version' },
                    'Latest release: ' + version
                )
            )
        ),
        _react2.default.createElement('div', { className: 'react-rainbow-divider-dotted' })
    );
}

Logo.propTypes = {
    version: _propTypes2.default.string.isRequired
};

Logo.defaultProps = {
    version: ''
};