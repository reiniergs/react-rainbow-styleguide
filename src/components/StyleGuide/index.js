import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/index';
import './styles.css';

export default class StyleGuide extends React.Component {
    render() {
        const {
            children,
            title,
            toc,
            version,
        } = this.props;
        debugger;
        return (
            <div className="react-rainbow-styleguide-container rainbow-position-align_start">
                <aside className="react-rainbow-sidebar">
                    <Logo title={title} version={version} />
                    {toc}
                </aside>
                <main className="react-rainbow-main-content">
                    {children}
                </main>
            </div>
        );
    }
}

StyleGuide.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    toc: PropTypes.object.isRequired,
    version: PropTypes.string,
};

StyleGuide.defaultProps = {
    version: '',
};
