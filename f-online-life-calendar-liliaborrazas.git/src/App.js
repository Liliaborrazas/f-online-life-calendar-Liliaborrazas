import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      faces: [],
      date: "",
      status: "",
      mesagge: "",
    }
  }



  
  render() {
    return (
      <div className="app">
        <form className="form__container" onSubmit>
          <div className="date__container">
              <label name="date">Fecha</label>
              <input className="inputDate" type="date" name="date" onChange required />
          </div>
          <div className="status__container">
              <label name="status">Estado</label>
              <label name="happy">
              <input className="inputStatus" type="checkbox" name="happy" onChange /> :)
              </label>
              <label name="sad">
              <input className="checkboxs" type="checkbox" name="sad" onChange /> :(
              </label>
          </div> 
          <div className>
              <label className="labelHappy" name="mesagge" onChange>Mensaje
              <input className="inputhappy" type="text" name="happy" placeholder="¿Por qué es un buen día?" />
              </label>
          </div>
          <div className="buttons__container">
            <button className="btn-submit" type="submit">GUARDAR</button>
            <button className="btn-cancel" onClick>CANCELAR</button>      
          </div>
		     </form>
      </div>
    );
  }
}

export default App;
