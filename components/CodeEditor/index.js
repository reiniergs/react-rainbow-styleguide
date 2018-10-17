'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CodeEditor;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCodemirror = require('react-codemirror2');

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configOptions = {
    mode: 'jsx',
    lineNumbers: true
}; /* eslint-disable import/no-extraneous-dependencies */
function CodeEditor(_ref) {
    var code = _ref.code;

    return _react2.default.createElement(
        'div',
        { className: 'rainbow-flex rainbow-flex_column rainbow_vertical-stretch rainbow-m-top_x-small rainbow-m-bottom_large' },
        _react2.default.createElement(_header2.default, { code: code }),
        _react2.default.createElement(_reactCodemirror.Controlled, { value: code, options: configOptions })
    );
}

CodeEditor.propTypes = {
    code: _propTypes2.default.string
};

CodeEditor.defaultProps = {
    code: ''
};