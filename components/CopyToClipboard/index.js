'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _clipboardCopy = require('clipboard-copy');

var _clipboardCopy2 = _interopRequireDefault(_clipboardCopy);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

var _ButtonIcon = require('react-rainbow-components/components/ButtonIcon');

var _ButtonIcon2 = _interopRequireDefault(_ButtonIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/no-extraneous-dependencies */


var CopyToClipboard = function (_Component) {
    _inherits(CopyToClipboard, _Component);

    function CopyToClipboard(props) {
        _classCallCheck(this, CopyToClipboard);

        var _this = _possibleConstructorReturn(this, (CopyToClipboard.__proto__ || Object.getPrototypeOf(CopyToClipboard)).call(this, props));

        _this.state = { icon: _freeSolidSvgIcons.faClipboard };
        _this.handleCopyToClipboardClick = _this.handleCopyToClipboardClick.bind(_this);
        return _this;
    }

    _createClass(CopyToClipboard, [{
        key: 'handleCopyToClipboardClick',
        value: function handleCopyToClipboardClick() {
            var _this2 = this;

            var text = this.props.text;

            (0, _clipboardCopy2.default)(text);
            this.setState({ icon: _freeSolidSvgIcons.faClipboardCheck });
            setTimeout(function () {
                _this2.setState({ icon: _freeSolidSvgIcons.faClipboard });
            }, 1000);
        }
    }, {
        key: 'render',
        value: function render() {
            var variant = this.props.variant;
            var icon = this.state.icon;

            return _react2.default.createElement(_ButtonIcon2.default, {
                onClick: this.handleCopyToClipboardClick,
                assistiveText: 'copy to clipboard',
                size: 'medium',
                variant: variant,
                icon: _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: icon }) });
        }
    }]);

    return CopyToClipboard;
}(_react.Component);

exports.default = CopyToClipboard;


CopyToClipboard.propTypes = {
    text: _propTypes2.default.string.isRequired,
    variant: _propTypes2.default.string
};

CopyToClipboard.defaultProps = {
    variant: 'inverse'
};