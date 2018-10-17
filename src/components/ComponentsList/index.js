import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VerticalNavigation from 'react-rainbow-components/components/VerticalNavigation';
import Sections from './sections';
import './styles.css';

function resolveCurrentUrl() {
    return window.location.href.split('#/')[1] || 'Overview';
}

export default class ComponentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: resolveCurrentUrl(),
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(e, selectedItem) {
        return this.setState({ selectedItem });
    }

    render() {
        const { items, searchTerm } = this.props;
        const { selectedItem } = this.state;

        if (!items.length) {
            return null;
        }

        return (
            <VerticalNavigation
                compact
                className="rainbow-p-bottom_large react-rainbow-vertical-navigation"
                selectedItem={selectedItem}
                onSelect={this.handleOnSelect}>

                <Sections selectedItem={selectedItem} items={items} searchTerm={searchTerm} />
            </VerticalNavigation>
        );
    }
}

ComponentsList.propTypes = {
    items: PropTypes.array.isRequired,
    searchTerm: PropTypes.string.isRequired,
};
