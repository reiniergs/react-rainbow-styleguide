'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CustomPathline;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./styles.css');

var _CopyToClipboard = require('../CopyToClipboard');

var _CopyToClipboard2 = _interopRequireDefault(_CopyToClipboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
function CustomPathline(props) {
    var name = props.name,
        children = props.children;


    return _react2.default.createElement(
        'div',
        { className: 'rainbow-flex rainbow-align_center' },
        _react2.default.createElement(
            'span',
            null,
            _react2.default.createElement(
                'span',
                { className: 'react-rainbow-text-color-violet' },
                'import '
            ),
            _react2.default.createElement(
                'span',
                { className: 'react-rainbow-text-color-gray' },
                name
            ),
            _react2.default.createElement(
                'span',
                { className: 'react-rainbow-text-color-violet' },
                ' from '
            ),
            _react2.default.createElement(
                'span',
                { className: 'react-rainbow-text-color-green' },
                '\'react-rainbow-components/components/' + name + '\';'
            )
        ),
        _react2.default.createElement(_CopyToClipboard2.default, { text: children, variant: 'base' })
    );
}

CustomPathline.propTypes = {
    name: _propTypes2.default.string.isRequired,
    children: _propTypes2.default.node.isRequired
};