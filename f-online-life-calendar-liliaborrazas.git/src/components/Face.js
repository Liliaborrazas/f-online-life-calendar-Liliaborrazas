import React, { Component } from 'react';


class Face extends Component{

    render(){
    
        return (
            <div>
                <p className="day"
                    title={this.props.date + " " + this.props.message} 
                >
                {this.props.state}
                </p>
            </div> 
        )
    }
}

export default Face;
