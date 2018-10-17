'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SectionRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Markdown = require('react-styleguidist/lib/rsg-components/Markdown/Markdown');

var _Markdown2 = _interopRequireDefault(_Markdown);

var _SectionHeading = require('../SectionHeading');

var _SectionHeading2 = _interopRequireDefault(_SectionHeading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
function SectionRenderer(props) {
    var name = props.name,
        slug = props.slug,
        content = props.content,
        components = props.components,
        sections = props.sections,
        depth = props.depth,
        description = props.description,
        pagePerSection = props.pagePerSection;


    var getSectionClassName = function getSectionClassName() {
        if (name === 'Getting Started' || name === 'Overview' || name === 'Usage' || name === 'Contribuiting') {
            return 'rainbow-p-horizontal_x-large';
        }
        return null;
    };

    return _react2.default.createElement(
        'section',
        null,
        name && _react2.default.createElement(
            _SectionHeading2.default,
            {
                depth: depth,
                id: slug,
                slotName: 'sectionToolbar',
                pagePerSection: pagePerSection,
                slotProps: props },
            name
        ),
        _react2.default.createElement(
            'div',
            { className: getSectionClassName() },
            description && _react2.default.createElement(_Markdown2.default, { text: description }),
            content,
            sections,
            components
        )
    );
}

SectionRenderer.propTypes = {
    name: _propTypes2.default.string,
    description: _propTypes2.default.string,
    slug: _propTypes2.default.string,
    content: _propTypes2.default.node,
    components: _propTypes2.default.node.isRequired,
    sections: _propTypes2.default.node,
    depth: _propTypes2.default.number.isRequired,
    pagePerSection: _propTypes2.default.bool.isRequired
};

SectionRenderer.defaultProps = {
    name: undefined,
    description: undefined,
    slug: undefined,
    content: undefined,
    sections: undefined
};