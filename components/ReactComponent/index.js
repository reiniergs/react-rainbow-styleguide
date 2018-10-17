'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

var _Pathline = require('react-styleguidist/lib/rsg-components/Pathline');

var _Pathline2 = _interopRequireDefault(_Pathline);

var _Tabset = require('react-rainbow-components/components/Tabset');

var _Tabset2 = _interopRequireDefault(_Tabset);

var _Tab = require('react-rainbow-components/components/Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _RenderIf = require('react-rainbow-components/components/RenderIf');

var _RenderIf2 = _interopRequireDefault(_RenderIf);

var _Card = require('react-rainbow-components/components/Card');

var _Card2 = _interopRequireDefault(_Card);

var _tabLabel = require('./tabLabel');

var _tabLabel2 = _interopRequireDefault(_tabLabel);

var _description = require('./description');

var _description2 = _interopRequireDefault(_description);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/no-extraneous-dependencies */


var ReactComponent = function (_Component) {
    _inherits(ReactComponent, _Component);

    function ReactComponent(props) {
        _classCallCheck(this, ReactComponent);

        var _this = _possibleConstructorReturn(this, (ReactComponent.__proto__ || Object.getPrototypeOf(ReactComponent)).call(this, props));

        _this.state = { activeTabName: 'examples' };
        _this.handleOnSelect = _this.handleOnSelect.bind(_this);
        return _this;
    }

    _createClass(ReactComponent, [{
        key: 'handleOnSelect',
        value: function handleOnSelect(event, tab) {
            this.setState({ activeTabName: tab });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                name = _props.name,
                heading = _props.heading,
                description = _props.description,
                examples = _props.examples,
                tabBody = _props.tabBody;

            var descriptionText = description ? description.props.text : null;
            var activeTabName = this.state.activeTabName;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'react-rainbow-component-top-content' },
                    heading,
                    _react2.default.createElement(
                        'div',
                        { className: 'rainbow-p-horizontal_x-large' },
                        _react2.default.createElement(_description2.default, { text: descriptionText })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'rainbow-p-vertical_large rainbow-p-horizontal_x-large' },
                        _react2.default.createElement(
                            _Pathline2.default,
                            { name: name },
                            'import ' + name + ' from \'react-rainbow-components/components/' + name + '\''
                        )
                    ),
                    _react2.default.createElement(
                        _Tabset2.default,
                        {
                            className: 'rainbow-p-horizontal_x-large rainbow-m-bottom_xx-large',
                            activeTabName: activeTabName,
                            onSelect: this.handleOnSelect,
                            fullWidth: true },
                        _react2.default.createElement(_Tab2.default, { name: 'examples', label: _react2.default.createElement(_tabLabel2.default, { icon: _freeSolidSvgIcons.faCode, label: 'INTERACTIVE EXAMPLES' }) }),
                        _react2.default.createElement(_Tab2.default, { name: 'properties', label: _react2.default.createElement(_tabLabel2.default, { icon: _freeSolidSvgIcons.faList, label: 'PROPERTIES AND METHODS' }) }),
                        _react2.default.createElement(_Tab2.default, { name: 'utils', label: _react2.default.createElement(_tabLabel2.default, { icon: _freeSolidSvgIcons.faWrench, label: 'UTILS' }) })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'rainbow-p-top_small rainbow-p-horizontal_x-large' },
                    _react2.default.createElement(
                        _RenderIf2.default,
                        { isTrue: activeTabName === 'examples' },
                        _react2.default.createElement(
                            'div',
                            { className: 'rainbow-m-left_x-large rainbow-m-right_xx-large' },
                            examples
                        )
                    ),
                    _react2.default.createElement(
                        _RenderIf2.default,
                        { isTrue: activeTabName === 'properties' },
                        _react2.default.createElement(
                            _Card2.default,
                            {
                                className: 'rainbow-m-bottom_x-large rainbow-m-left_xx-large rainbow-m-right_x-large',
                                icon: _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faList, size: 'lg', className: 'rainbow-color_brand' }),
                                title: 'Properties & Methods details' },
                            tabBody
                        )
                    )
                )
            );
        }
    }]);

    return ReactComponent;
}(_react.Component);

exports.default = ReactComponent;


ReactComponent.propTypes = {
    name: _propTypes2.default.string.isRequired,
    heading: _propTypes2.default.node.isRequired,
    tabBody: _propTypes2.default.node.isRequired,
    description: _propTypes2.default.node.isRequired,
    examples: _propTypes2.default.node.isRequired
};