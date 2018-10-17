'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Header;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../CopyToClipboard/index');

var _index2 = _interopRequireDefault(_index);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
function Header(_ref) {
    var code = _ref.code;

    return _react2.default.createElement(
        'div',
        { className: 'react-rainbow-code-editor-header' },
        _react2.default.createElement(_index2.default, { text: code })
    );
}

Header.propTypes = {
    code: _propTypes2.default.string.isRequired
};