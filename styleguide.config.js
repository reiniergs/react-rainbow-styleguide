/* eslint-disable */
const path = require('path');
const styles = require('./styles');

module.exports = {
    styles,
    styleguideComponents: {
        StyleGuideRenderer: path.join(__dirname, './components/StyleGuide'),
        SectionHeading: path.join(__dirname, './components/SectionHeading'),
        ReactComponentRenderer: path.join(__dirname, './components/ReactComponent'),
        TableRenderer: path.join(__dirname, './components/PropsTable'),
        PlaygroundRenderer: path.join(__dirname, './components/Playground'),
        TabButtonRenderer: path.join(__dirname, './components/CodeEditorButton'),
        ToolbarButtonRenderer: path.join(__dirname, './components/ToolbarButton'),
        TableOfContents: path.join(__dirname, './components/TableOfContents'),
        ComponentsListRenderer: path.join(__dirname, './components/ComponentsList'),
        Editor: path.join(__dirname, './components/Editor'),
        PathlineRenderer: path.join(__dirname, './components/Pathline'),
        Wrapper: path.join(__dirname, './components/Wrapper'),
        SectionRenderer: path.join(__dirname, './components/SectionRenderer'),
    }
};
