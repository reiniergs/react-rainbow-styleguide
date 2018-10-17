'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = GlobalHeader;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rainbowLogo = require('./../../../assets/images/rainbow-logo.svg');

var _rainbowLogo2 = _interopRequireDefault(_rainbowLogo);

var _Avatar = require('./../../../src/components/Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GlobalHeader(props) {
    var className = props.className,
        children = props.children,
        src = props.src;


    return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
            'header',
            { className: 'rainbow-align-content_space-between rainbow-p-vertical_small react-rainbow-golbal-header rainbow-background-color_white' },
            _react2.default.createElement('img', { src: _rainbowLogo2.default, alt: 'rainbow logo', className: 'rainbow-m-left_medium react-rainbow-global-header-logo' }),
            _react2.default.createElement(
                'div',
                { className: 'rainbow-flex rainbow-align_center' },
                children,
                _react2.default.createElement(_Avatar2.default, {
                    src: src,
                    variant: 'circle',
                    className: 'rainbow-m-horizontal_medium' })
            )
        )
    );
}

GlobalHeader.propTypes = {
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    src: _propTypes2.default.string
};

GlobalHeader.defaultProps = {
    children: null,
    className: undefined,
    src: 'images/user/user1.jpg'
};