//dependecies
import React , { Component } from 'react';
import PropTypes from 'prop-types';

//assets
import './css/content.css';

class Content extends Component {
    render () {
        const {  body } = this.props;

        return (
            <div className="content">
                { body }
            </div>
        );
    }
}

Content.propTypes = {
    body: PropTypes.object.isRequired
}

export default Content;