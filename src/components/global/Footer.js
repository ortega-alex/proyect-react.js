//depedencies
import React , { Component } from 'react';
import PropTypes from 'prop-types';

import './css/footer.css';

class Footer extends Component {
    render() {

        const { copyright="&copy; React 2019" } = this.props;

        return (
            <div className="footer">
                <span dangerouslySetInnerHTML={{ __html: copyright }}></span>
             </div>
        );
    }
}

Footer.propTypes = {
    copyright : PropTypes.string
};

export default Footer;