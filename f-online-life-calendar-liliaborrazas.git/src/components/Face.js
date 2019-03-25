import React, { Component } from 'react';


class Face extends Component{

    render(){
    
        return (
            <div>
                <li className="day" title={this.props.date + " " + this.props.message}>
                {this.props.state}
                </li>
            </div> 
        )
    }
}

export default Face;
