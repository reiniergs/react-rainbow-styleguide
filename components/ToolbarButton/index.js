'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ToolbarButton;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

var _Button = require('react-rainbow-components/components/Button');

var _Button2 = _interopRequireDefault(_Button);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
function resolveHref() {
    var urlArray = window.location.href.split('/');
    var componentName = urlArray[urlArray.length - 2];
    return '/#/' + componentName;
}

function ToolbarButton(props) {
    var onClick = props.onClick,
        href = props.href,
        title = props.title,
        children = props.children;


    if (href !== undefined && title === 'Open isolated') {
        return _react2.default.createElement(
            'a',
            { className: 'react-rainbow-toolbar-button', href: href, title: title, 'aria-label': title },
            _react2.default.createElement(
                _Button2.default,
                { variant: 'base' },
                _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faExpandArrowsAlt, className: 'rainbow-color_gray-4' })
            )
        );
    }

    if (href !== undefined && title === 'Show all components') {
        return _react2.default.createElement(
            'a',
            { className: 'react-rainbow-toolbar-button', href: resolveHref(), title: title, 'aria-label': title },
            _react2.default.createElement(
                _Button2.default,
                { variant: 'base' },
                _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faCompress, className: 'rainbow-color_gray-4' })
            )
        );
    }

    return _react2.default.createElement(
        'button',
        { type: 'button', onClick: onClick, title: title, 'aria-label': title },
        children
    );
}

ToolbarButton.propTypes = {
    href: _propTypes2.default.string,
    onClick: _propTypes2.default.func,
    title: _propTypes2.default.string.isRequired,
    children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.object])
};

ToolbarButton.defaultProps = {
    href: undefined,
    onClick: function onClick() {},
    children: null
};