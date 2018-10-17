'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = PropsTable;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _headerRows = require('./headerRows');

var _headerRows2 = _interopRequireDefault(_headerRows);

var _bodyRows = require('./bodyRows');

var _bodyRows2 = _interopRequireDefault(_bodyRows);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PropsTable(props) {
    return _react2.default.createElement(
        'table',
        { className: 'react-rainbow-table react-rainbow-table-bordered rainbow-m-bottom_large' },
        _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(_headerRows2.default, { columns: props.columns })
        ),
        _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(_bodyRows2.default, props)
        )
    );
}

PropsTable.propTypes = {
    columns: _propTypes2.default.arrayOf(_propTypes2.default.shape({
        caption: _propTypes2.default.string.isRequired,
        render: _propTypes2.default.func.isRequired
    })).isRequired,
    rows: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
    getRowKey: _propTypes2.default.func.isRequired
};