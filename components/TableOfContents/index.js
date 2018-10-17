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

var _filterSectionsByName = require('react-styleguidist/lib/utils/filterSectionsByName');

var _filterSectionsByName2 = _interopRequireDefault(_filterSectionsByName);

var _Input = require('react-rainbow-components/components/Input');

var _Input2 = _interopRequireDefault(_Input);

var _ComponentsList = require('../ComponentsList');

var _ComponentsList2 = _interopRequireDefault(_ComponentsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable import/no-extraneous-dependencies */


var TableOfContents = function (_Component) {
    _inherits(TableOfContents, _Component);

    function TableOfContents(props) {
        _classCallCheck(this, TableOfContents);

        var _this = _possibleConstructorReturn(this, (TableOfContents.__proto__ || Object.getPrototypeOf(TableOfContents)).call(this, props));

        _this.handleOnChange = _this.handleOnChange.bind(_this);
        _this.state = {
            searchTerm: ''
        };
        return _this;
    }

    _createClass(TableOfContents, [{
        key: 'handleOnChange',
        value: function handleOnChange(event) {
            this.setState({ searchTerm: event.target.value });
        }
    }, {
        key: 'renderLevel',
        value: function renderLevel(sections) {
            var useRouterLinks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var _this2 = this;

            var hashPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
            var useHashId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

            var items = sections.map(function (section) {
                var children = [].concat(_toConsumableArray(section.sections || []), _toConsumableArray(section.components || []));
                var sectionDepth = section.sectionDepth || 0;
                var childHashPath = sectionDepth === 0 && useHashId ? hashPath : [].concat(_toConsumableArray(hashPath), [section.name]);
                return Object.assign({}, section, {
                    heading: !!section.name && children.length > 0,
                    content: children.length > 0 && _this2.renderLevel(children, useRouterLinks, childHashPath, sectionDepth === 0)
                });
            });

            return _react2.default.createElement(_ComponentsList2.default, {
                searchTerm: this.state.searchTerm,
                items: items,
                hashPath: hashPath,
                useHashId: useHashId,
                useRouterLinks: useRouterLinks
            });
        }
    }, {
        key: 'renderSections',
        value: function renderSections() {
            var searchTerm = this.state.searchTerm;
            var _props = this.props,
                sections = _props.sections,
                useRouterLinks = _props.useRouterLinks;

            var firstLevel = sections.length === 1 ? sections[0].components : sections;
            var filtered = (0, _filterSectionsByName2.default)(firstLevel, searchTerm);

            return this.renderLevel(filtered, useRouterLinks);
        }
    }, {
        key: 'render',
        value: function render() {
            var searchTerm = this.state.searchTerm;


            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'rainbow-p-top_large rainbow-p-bottom_medium rainbow-p-horizontal_large' },
                    _react2.default.createElement(_Input2.default, {
                        iconName: 'utility:search',
                        value: searchTerm,
                        placeholder: 'Filter by name',
                        'aria-label': 'Filter by name',
                        onChange: this.handleOnChange,
                        icon: _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faSearch, className: 'rainbow-color_gray-3' }) })
                ),
                this.renderSections()
            );
        }
    }]);

    return TableOfContents;
}(_react.Component);

exports.default = TableOfContents;


TableOfContents.propTypes = {
    sections: _propTypes2.default.any.isRequired,
    useRouterLinks: _propTypes2.default.bool.isRequired
};