'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = GitHubIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GitHubIcon(props) {
    var className = props.className,
        style = props.style;

    return _react2.default.createElement(
        'svg',
        { width: '26px', height: '26px', viewBox: '0 0 26 26', version: '1.1' },
        _react2.default.createElement(
            'title',
            null,
            'github'
        ),
        _react2.default.createElement(
            'desc',
            null,
            'Created with Sketch.'
        ),
        _react2.default.createElement(
            'g',
            { id: 'components', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
            _react2.default.createElement(
                'g',
                { id: 'Components-Badge', transform: 'translate(-934.000000, -29.000000)', fill: '#061c3f', 'fill-rule': 'nonzero' },
                _react2.default.createElement(
                    'g',
                    { id: 'Group-2', transform: 'translate(264.000000, 21.000000)' },
                    _react2.default.createElement(
                        'g',
                        { id: 'Group', transform: 'translate(567.000000, 8.000000)' },
                        _react2.default.createElement(
                            'g',
                            { id: 'github', transform: 'translate(103.000000, 0.000000)' },
                            _react2.default.createElement('path', { d: 'M12.998375,0.0170398406 C5.82075,0.0170398406 0,5.97694422 0,13.3290398 C0,19.2093904 3.7245,24.1980757 8.892,25.9598606 C9.542,26.082506 9.77925,25.6714781 9.77925,25.3184582 C9.77925,25.0019004 9.767875,24.1649283 9.761375,23.05449 C6.14575,23.8583147 5.382,21.269502 5.382,21.269502 C4.792125,19.7314622 3.939,19.3220916 3.939,19.3220916 C2.757625,18.4967211 4.02675,18.5132948 4.02675,18.5132948 C5.331625,18.6077649 6.017375,19.8855976 6.017375,19.8855976 C7.177625,21.9191912 9.061,21.3324821 9.802,20.9910637 C9.919,20.1308884 10.255375,19.5441793 10.6275,19.2110478 C7.7415,18.8746016 4.706,17.7326733 4.706,12.6329442 C4.706,11.1794303 5.213,9.99109562 6.045,9.05965339 C5.910125,8.72320717 5.464875,7.36913546 6.17175,5.53774104 C6.17175,5.53774104 7.26375,5.179749 9.74675,6.90175697 C10.7835,6.60674502 11.895,6.45923904 13.001625,6.45426693 C14.105,6.46089641 15.218125,6.60674502 16.2565,6.90341434 C18.737875,5.18140637 19.82825,5.53939841 19.82825,5.53939841 C20.53675,7.3724502 20.0915,8.72486454 19.95825,9.06131076 C20.791875,9.99275299 21.294,11.1810876 21.294,12.6346016 C21.294,17.7475896 18.25525,18.8729442 15.3595,19.202761 C15.825875,19.6137888 16.241875,20.4259004 16.241875,21.6672709 C16.241875,23.4472869 16.225625,24.8825697 16.225625,25.3184582 C16.225625,25.6747928 16.459625,26.0891355 17.119375,25.9582032 C22.27875,24.194761 26,19.2077331 26,13.3290398 C26,5.97694422 20.17925,0.0170398406 12.998375,0.0170398406 Z', id: 'Shape' })
                        )
                    )
                )
            )
        )
    );
}

GitHubIcon.propTypes = {
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};

GitHubIcon.defaultProps = {
    className: undefined,
    style: {}
};