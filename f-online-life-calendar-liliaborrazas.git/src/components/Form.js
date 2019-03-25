import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Form extends Component {
    render() {
    
    const {addDate, addFace, addMessage, cancelButton, submitDay} =this.props;
    
    return (
        <form className="form__container" onSubmit>
            <div className="date__container">
                <label name="date">Fecha</label>
                <input className="inputDate" type="date" name="date" onChange={addDate} required />
            </div>
            <div className="status__container">
                <label name="status">Estado</label>
                <input className="inputStatus" name="face" type="radio" value="happy" onChange={addFace} /> 
                <label name="happy"> :) </label> 
                <input className="checkboxs" name="face" type="radio" value="sad" onChange={addFace}  /> 
                  <label name="sad">:(</label>
            </div> 
            <div className>  
                <textarea className="inputhappy" name="happy" rows="8" cols="80" placeholder="¿Por qué es un buen día?" onChange={addMessage}></textarea>
            </div>
            <div className="buttons__container">
            <Link to='/'>
              <button className="btn-submit" type="submit" onClick={submitDay}>GUARDAR</button>
              <button className="btn-cancel" onClick={cancelButton}>CANCELAR</button>    
              </Link>  
            </div>
          </form>
    )
    }
}
export default Form;
