import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class ListFace extends Component{
    render(){
      const {faces}=this.props;

        return(
         <div className="app-calendar">
          <Link to= "/formulario">
          <button> + </button>
          </Link>
          <ul className="list">
          {faces.length > 0 && faces.map((item, index)=>
            
           <li key={index}>
            <p className="data-day">{item.date} </p>
            <p className="data-day">{item.status} </p>
            <p className="data-day">{item.message} </p>
            
            </li>
        )}
          </ul>
            </div> 
         ) }
}

export default ListFace;