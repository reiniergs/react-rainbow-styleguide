'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CodeEditorButton;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

var _Button = require('react-rainbow-components/components/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CodeEditorButton(_ref) {
    var onClick = _ref.onClick,
        active = _ref.active;

    var getLabel = function getLabel() {
        if (active) {
            return 'Hide Code';
        }
        return 'Show Code';
    };

    return _react2.default.createElement(
        _Button2.default,
        { variant: 'base', onClick: onClick },
        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, {
            className: 'rainbow-font-size-heading_small rainbow-m-right_x-small',
            icon: _freeSolidSvgIcons.faCode }),
        getLabel()
    );
} /* eslint-disable import/no-extraneous-dependencies */


CodeEditorButton.propTypes = {
    onClick: _propTypes2.default.func.isRequired,
    active: _propTypes2.default.bool
};

CodeEditorButton.defaultProps = {
    active: undefined
};