'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = TabLabel;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TabLabel(_ref) {
    var icon = _ref.icon,
        label = _ref.label;

    return _react2.default.createElement(
        'span',
        { className: 'react-rainbow-tab-label' },
        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: icon, className: 'rainbow-m-right_x-small' }),
        _react2.default.createElement(
            'span',
            null,
            label
        )
    );
} /* eslint-disable import/no-extraneous-dependencies */


TabLabel.propTypes = {
    icon: _propTypes2.default.object,
    label: _propTypes2.default.string
};

TabLabel.defaultProps = {
    icon: null,
    label: null
};