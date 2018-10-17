'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = HeaderRows;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HeaderRows(_ref) {
    var columns = _ref.columns;

    return _react2.default.createElement(
        'tr',
        { className: 'react-rainbow-text-title-caps' },
        columns.map(function (_ref2) {
            var caption = _ref2.caption;
            return _react2.default.createElement(
                'th',
                { key: caption, scope: 'col' },
                _react2.default.createElement(
                    'div',
                    { className: 'react-rainbow-truncate', title: caption },
                    caption
                )
            );
        })
    );
}

HeaderRows.propTypes = {
    columns: _propTypes2.default.array.isRequired
};