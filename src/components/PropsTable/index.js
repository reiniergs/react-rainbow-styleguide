import React from 'react';
import PropTypes from 'prop-types';
import HeaderRows from './headerRows';
import BodyRows from './bodyRows';
import './styles.css';

export default function PropsTable(props) {
    return (
        <table className="react-rainbow-table react-rainbow-table-bordered rainbow-m-bottom_large">
            <thead>
                <HeaderRows columns={props.columns} />
            </thead>
            <tbody>
                <BodyRows {...props} />
            </tbody>
        </table>
    );
}

PropsTable.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            caption: PropTypes.string.isRequired,
            render: PropTypes.func.isRequired,
        }),
    ).isRequired,
    rows: PropTypes.arrayOf(PropTypes.object).isRequired,
    getRowKey: PropTypes.func.isRequired,
};
