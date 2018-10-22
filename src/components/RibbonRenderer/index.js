import React, { Component } from 'react';
import Badge from 'react-rainbow-components/components/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import GithubIcon from './githubIcon';
import fetchGithubStars from './fetchStars'
import './styles.css';

export default class RibbonRenderer extends Component {
    constructor(props) {
        super(props);
        this.state = { starsCount: '0' };
    }

    componentDidMount() {
        const { url } = this.props;
        fetchGithubStars(url).then(starsCount => this.setState({ starsCount }));
    }

    render() {
        const { starsCount } = this.state;
        const { url } = this.props;

        return (
            <div className="rainbow-align-content_center react-rainbow-ribbon-container">
                <Badge className="react-rainbow-github-badge rainbow-color_dark-1 rainbow-m-right_medium" variant="lightest">
                    <FontAwesomeIcon color="#061c3f" icon={faStar} pull="left" />
                    {starsCount}
                </Badge>
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer">

                    <GithubIcon />
                </a>
            </div>
        );
    }
};
