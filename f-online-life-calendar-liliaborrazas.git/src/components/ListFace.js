import React, { Component } from 'react';
import Face from '../components/Face';
import { Link } from 'react-router-dom';




class ListFace extends Component{
    render(){
      const {faces}=this.props;
        return(<div>
        <Link to= "/formulario">
        <button> + </button>
        </Link>
        {faces.length > 0 && faces.map((item)=>
        
          <Face
          date= {item.date} 
          status={item.status} 
          message= {item.message}
          />
      )}
            </div> 
         ) }
}

export default ListFace;