'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../Logo/index');

var _index2 = _interopRequireDefault(_index);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyleGuide = function (_React$Component) {
    _inherits(StyleGuide, _React$Component);

    function StyleGuide() {
        _classCallCheck(this, StyleGuide);

        return _possibleConstructorReturn(this, (StyleGuide.__proto__ || Object.getPrototypeOf(StyleGuide)).apply(this, arguments));
    }

    _createClass(StyleGuide, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                title = _props.title,
                toc = _props.toc,
                version = _props.version;

            debugger;
            return _react2.default.createElement(
                'div',
                { className: 'react-rainbow-styleguide-container rainbow-position-align_start' },
                _react2.default.createElement(
                    'aside',
                    { className: 'react-rainbow-sidebar' },
                    _react2.default.createElement(_index2.default, { title: title, version: version }),
                    toc
                ),
                _react2.default.createElement(
                    'main',
                    { className: 'react-rainbow-main-content' },
                    children
                )
            );
        }
    }]);

    return StyleGuide;
}(_react2.default.Component);

exports.default = StyleGuide;


StyleGuide.propTypes = {
    children: _propTypes2.default.node.isRequired,
    title: _propTypes2.default.string.isRequired,
    toc: _propTypes2.default.object.isRequired,
    version: _propTypes2.default.string
};

StyleGuide.defaultProps = {
    version: ''
};