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
           <li className="list__calendar" key={index}>
              <div className="card__calendar">
                <p className="data-date">{item.date} </p>
                <p className="data-state">{item.status} </p>
                <p className="data-message">{item.message} </p> 
              </div>
            </li>
        )}
          </ul>
        </div> 
         ) }
}

export default ListFace;