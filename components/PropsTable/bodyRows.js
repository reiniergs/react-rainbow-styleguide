'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = BodyRows;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTitleValue(value) {
    if (!value) {
        return null;
    }
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value[0]) {
        return value[0].props.text;
    }
    return value;
}

function renderValue(value) {
    if (value === 'undefined' || value === 'null') {
        return '';
    }
    return value;
}

function BodyRows(_ref) {
    var rows = _ref.rows,
        columns = _ref.columns,
        getRowKey = _ref.getRowKey;

    return rows.map(function (row) {
        return _react2.default.createElement(
            'tr',
            { key: getRowKey(row) },
            columns.map(function (_ref2, index) {
                var render = _ref2.render,
                    caption = _ref2.caption;

                var key = 'td-' + index;
                var value = render(row) ? render(row).props.children : null;
                var titleValue = getTitleValue(value);
                return _react2.default.createElement(
                    'td',
                    { key: key, 'data-label': caption },
                    _react2.default.createElement(
                        'div',
                        { className: 'react-rainbow-truncate', title: titleValue },
                        renderValue(value)
                    )
                );
            })
        );
    });
}

BodyRows.propTypes = {
    columns: _propTypes2.default.array.isRequired
};