'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable import/no-extraneous-dependencies */


exports.default = EditorLoader;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Editor = require('react-styleguidist/lib/rsg-components/Editor/Editor');

var _Editor2 = _interopRequireDefault(_Editor);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var editorConfig = { lineNumbers: true };

function EditorLoader(props) {
    var code = props.code;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_header2.default, { code: code }),
        _react2.default.createElement(_Editor2.default, _extends({}, props, { editorConfig: editorConfig }))
    );
}