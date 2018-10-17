'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = PlaygroundRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function PlaygroundRenderer(props) {
    var name = props.name,
        preview = props.preview,
        previewProps = props.previewProps,
        tabButtons = props.tabButtons,
        tabBody = props.tabBody,
        toolbar = props.toolbar;

    var rest = _objectWithoutProperties(previewProps, []);

    if (name === 'Getting Started' || name === 'Overview' || name === 'Usage') {
        return _react2.default.createElement(
            'div',
            { className: 'rainbow-position_relative' },
            preview
        );
    }

    return _react2.default.createElement(
        'div',
        { className: 'rainbow-position_relative rainbow-m-bottom_large' },
        toolbar,
        _react2.default.createElement(
            'article',
            _extends({}, rest, { className: 'react-rainbow-playground', 'data-preview': name }),
            preview
        ),
        _react2.default.createElement(
            'div',
            { className: 'rainbow-flex rainbow-justify_end rainbow-p-vertical_xx-small' },
            tabButtons
        ),
        _react2.default.createElement(
            'div',
            null,
            tabBody
        )
    );
}

PlaygroundRenderer.propTypes = {
    name: _propTypes2.default.string.isRequired,
    preview: _propTypes2.default.node.isRequired,
    previewProps: _propTypes2.default.object.isRequired,
    tabButtons: _propTypes2.default.node.isRequired,
    tabBody: _propTypes2.default.node.isRequired,
    toolbar: _propTypes2.default.node.isRequired
};