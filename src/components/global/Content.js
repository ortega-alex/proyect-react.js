import React , { Component } from 'react';
import './css/content.css';

class  Content extends Component {

    constructor(){
        super();
        this.state = {
            count : 0
        };
        this.handleCountClick = this.handleCountClick.bind(this);
    }

    componentDidMount(){
        this.setState({
            count: 1
        });
    }

    handleCountClick() {
        
    }

    render () {
        return (
            <div className="content">
                <h1>Counter: { this.state.count } </h1>
                
                <p>
                    <button id="add" onClick={this.handleCountClick}></button>
                </p>
            </div>
        ); 
    }
}

export default Content;