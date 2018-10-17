'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Sections;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _section = require('./section');

var _section2 = _interopRequireDefault(_section);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resolveComma(items, index) {
    if (index === 3 || index === items.length - 1) {
        return '';
    }
    return ',';
}

function getVisibleName(items, index) {
    if (index < items.length && index < 4) {
        return '' + items[index].visibleName + resolveComma(items, index);
    }
    return '';
}

function getDescription(items) {
    return getVisibleName(items, 0) + ' ' + getVisibleName(items, 1) + ' ' + getVisibleName(items, 2) + ' ' + getVisibleName(items, 3);
}

function Sections(props) {
    var items = props.items,
        selectedItem = props.selectedItem,
        searchTerm = props.searchTerm;


    return items.map(function (_ref) {
        var heading = _ref.heading,
            visibleName = _ref.visibleName,
            slug = _ref.slug,
            content = _ref.content;

        if (heading) {
            return _react2.default.createElement(_section2.default, {
                key: slug,
                label: visibleName,
                items: content.props.items,
                selectedItem: selectedItem,
                searchTerm: searchTerm,
                description: getDescription(content.props.items) });
        }return null;
    });
}

Sections.propTypes = {
    items: _propTypes2.default.array.isRequired,
    searchTerm: _propTypes2.default.string.isRequired,
    selectedItem: _propTypes2.default.string.isRequired
};