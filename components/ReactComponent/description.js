'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Description;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Description(_ref) {
    var text = _ref.text;

    if (text) {
        return _react2.default.createElement(
            'p',
            { className: 'rainbow-font-size-heading_small rainbow-p-top_medium react-rainbow-component-description-text rainbow-color_dark-1' },
            text
        );
    }
    return null;
}

Description.propTypes = {
    text: _propTypes2.default.string
};

Description.defaultProps = {
    text: undefined
};