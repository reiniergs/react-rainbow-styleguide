'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Wrapper;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Application = require('react-rainbow-components/components/Application');

var _Application2 = _interopRequireDefault(_Application);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Wrapper(_ref) {
    var children = _ref.children;

    return _react2.default.createElement(
        _Application2.default,
        { className: 'react-rainbow-styleguide-wrapper-container' },
        children
    );
}

Wrapper.propTypes = {
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.object])
};

Wrapper.defaultProps = {
    children: []
};