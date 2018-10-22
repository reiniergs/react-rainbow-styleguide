import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ribbon from 'react-styleguidist/lib/rsg-components/Ribbon';
import Logo from '../Logo/index';
import './styles.css';

export default class StyleGuide extends Component {
    render() {
        const {
            children,
            title,
            toc,
            version,
        } = this.props;

        return (
            <div className="react-rainbow-styleguide-container rainbow-position-align_start">
                <aside className="react-rainbow-sidebar">
                    <Logo title={title} version={version} />
                    {toc}
                </aside>
                <main className="react-rainbow-main-content">
                    {children}
                </main>
                <Ribbon />
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
