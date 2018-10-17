'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _VerticalSectionOverflow = require('react-rainbow-components/components/VerticalSectionOverflow');

var _VerticalSectionOverflow2 = _interopRequireDefault(_VerticalSectionOverflow);

var _VerticalItem = require('react-rainbow-components/components/VerticalItem');

var _VerticalItem2 = _interopRequireDefault(_VerticalItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function renderItems(items) {
    if (items && items.length) {
        return items.map(function (_ref) {
            var visibleName = _ref.visibleName;

            var pathname = '/#/' + visibleName;
            return _react2.default.createElement(_VerticalItem2.default, {
                key: visibleName,
                label: visibleName,
                name: visibleName,
                href: pathname });
        });
    }
    return null;
}

function isExpandedWhenSearch(items, searchTerm) {
    return !!(searchTerm && items.length);
}

function isInitallyExpanded(items, selectedItem) {
    return items.some(function (item) {
        return item.name === selectedItem;
    });
}

var Section = function (_Component) {
    _inherits(Section, _Component);

    function Section(props) {
        _classCallCheck(this, Section);

        var _this = _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).call(this, props));

        var items = props.items,
            selectedItem = props.selectedItem;

        _this.state = {
            isExpanded: isInitallyExpanded(items, selectedItem)
        };
        _this.handleOnToggleSection = _this.handleOnToggleSection.bind(_this);
        return _this;
    }

    _createClass(Section, [{
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            var prevSearchTerm = prevProps.searchTerm;
            var searchTerm = this.props.searchTerm;

            if (prevSearchTerm !== searchTerm) {
                this.isExpanded();
            }
        }
    }, {
        key: 'isExpanded',
        value: function isExpanded() {
            var _props = this.props,
                items = _props.items,
                searchTerm = _props.searchTerm;

            this.setState({
                isExpanded: isExpandedWhenSearch(items, searchTerm)
            });
        }
    }, {
        key: 'handleOnToggleSection',
        value: function handleOnToggleSection() {
            var isExpanded = this.state.isExpanded;

            this.setState({ isExpanded: !isExpanded });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                label = _props2.label,
                description = _props2.description,
                items = _props2.items;
            var isExpanded = this.state.isExpanded;


            return _react2.default.createElement(
                _VerticalSectionOverflow2.default,
                {
                    expanded: isExpanded,
                    label: label,
                    onToggleSection: this.handleOnToggleSection,
                    description: description },
                renderItems(items)
            );
        }
    }]);

    return Section;
}(_react.Component);

exports.default = Section;


Section.propTypes = {
    label: _propTypes2.default.string.isRequired,
    description: _propTypes2.default.string.isRequired,
    items: _propTypes2.default.array.isRequired,
    selectedItem: _propTypes2.default.string.isRequired,
    searchTerm: _propTypes2.default.string.isRequired
};