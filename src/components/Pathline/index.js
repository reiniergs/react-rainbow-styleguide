/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import CopyToClipboard from '../CopyToClipboard';
import './styles.css';

export default function CustomPathline(props, { config }) {
    const { name, children } = props;
    const { title } = config;
    const pathline = `import { ${name} } from '${title}'`;

    const Pathline = () => {
        if (children) {
            return <span className="react-rainbow-text-color-violet">{children}</span>;
        }
        return (
            <span>
                <span className="react-rainbow-text-color-violet">import </span>
                <span className="react-rainbow-text-color-gray">{`{ ${name} }`}</span>
                <span className="react-rainbow-text-color-violet"> from </span>
                <span className="react-rainbow-text-color-green">{`'${title}'`}</span>
            </span>
        );
    }

    const resolvePathline = () => {
        return children || pathline;
    }

    return (
        <div className="rainbow-flex rainbow-align_center">
            <Pathline />
            <CopyToClipboard text={resolvePathline()} variant="base" />
        </div>
    );
}

CustomPathline.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node,
};

CustomPathline.defaultProps = {
    children: undefined,
};

CustomPathline.contextTypes = {
	config: PropTypes.object,
};
