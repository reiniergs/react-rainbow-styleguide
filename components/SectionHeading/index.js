'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SectionHeading;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

var _index = require('./GithubStarsWrapper/index');

var _index2 = _interopRequireDefault(_index);

var _GitHubIcon = require('./GitHubIcon');

var _GitHubIcon2 = _interopRequireDefault(_GitHubIcon);

var _Badge = require('react-rainbow-components/components/Badge');

var _Badge2 = _interopRequireDefault(_Badge);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
var GithubStarsBadge = (0, _index2.default)(function (_ref) {
    var stars = _ref.stars;
    return _react2.default.createElement(
        _Badge2.default,
        { className: 'react-rainbow-github-badge rainbow-color_dark-1 rainbow-m-right_medium', variant: 'lightest' },
        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { color: '#061c3f', icon: _freeSolidSvgIcons.faStar, pull: 'left' }),
        stars
    );
});

function resolveTitle(title) {
    if (title === 'Getting Started') {
        return 'Overview';
    }
    return title;
}

function SectionHeading(_ref2) {
    var children = _ref2.children;

    return _react2.default.createElement(
        'header',
        { className: 'react-rainbow-heading-container rainbow-align-content_space-between rainbow-position_fixed' },
        _react2.default.createElement(
            'h1',
            { className: 'react-rainbow-title-text rainbow-color_dark-1 rainbow-font-size-heading_large' },
            resolveTitle(children)
        ),
        _react2.default.createElement(
            'div',
            { className: 'rainbow-align-content_center react-rainbow-github-badge-container' },
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(GithubStarsBadge, null)
            ),
            _react2.default.createElement(
                'a',
                {
                    href: 'https://github.com/reiniergs/react-rainbow',
                    target: '_blank',
                    rel: 'noopener noreferrer' },
                _react2.default.createElement(_GitHubIcon2.default, null)
            )
        )
    );
}

SectionHeading.propTypes = {
    children: _propTypes2.default.string.isRequired
};