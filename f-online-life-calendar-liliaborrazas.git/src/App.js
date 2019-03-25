import React, { Component } from 'react';
import './App.css';
import ListFace from './components/ListFace';
import Form from './components/Form';
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      faces: [],
      date: "",
      status: "",
      message: "",
    }
    this.submitDay = this.submitDay.bind(this);
    this.addDate = this.addDate.bind(this);
    this.addFace = this.addFace.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.cancelButton = this.cancelButton.bind(this);
  }
///////////////////////////////
  componentDidMount(){
    if(localStorage.getItem("infoCalendar")){
      this.setState(
        {faces: JSON.parse(localStorage.getItem("infoCalendar"))}
      )
    }
  }
  ////////////////////////////
  submitDay(e) {
    e.preventDefault();
    const newDay = this.state.faces;
    newDay.push(this.state.status)
    this.setState({ faces: newDay })
  }

  addDate(e) {
    this.setState({ date: e.target.value })
  }

  addFace(e) {
    this.setState({ status: e.target.value })
  }

  addMessage(e) {
    this.setState({ message: e.target.value })
  }
  
  cancelButton() {
    this.setState({
      date: "",
      status: "",
      message: "",
    })
  }
////////////////////////////
  componentDidUpdate(){
    localStorage.setItem("infoCalendar", JSON.stringify(this.state.faces));
  }
  //////////////////////////////////
  render() {
    return (
      <div className="app">
      <header className="plus__button">
          <h1 className="title">Calendario</h1>
      </header>
          <Switch>
         <Route exact path='/' render={()=>
            <ListFace
            faces={this.state.faces}
            />
          }/>
        <Route path='/formulario' 
            render={()=>
             <Form 
             addDate={this.state.addDate} 
             addFace={this.addFace}
             addMessage={this.addMessage}
             cancelButton={this.cancelButton}
             submitDay={this.submitDay}
            
            />
          }/>
          {/* <header className="plus__button">
			    	<a> + </a>
		    	</header>
          <ul>
            {this.state.faces.map((face, i) => {
              let smileys = face === ':)' ? 'happy__smile' : 'sad__smile'
              return (
            <li key={i} className={`smiles ${smileys}`}>
              {face}
            </li>
          );
            })}	
          </ul> */}
          {/* <form className="form__container" onSubmit>
            <div className="date__container">
                <label name="date">Fecha</label>
                <input className="inputDate" type="date" name="date" onChange={this.addDate} required />
            </div>
            <div className="status__container">
                <label name="status">Estado</label>
                <input className="inputStatus" name="face" type="radio" value="happy" onChange={this.addFace} /> 
                <label name="happy"> :) </label> 
                <input className="checkboxs" name="face" type="radio" value="sad" onChange={this.addFace}  /> 
                  <label name="sad">:(</label>
            </div> 
            <div className>  
                <textarea className="inputhappy" name="happy" rows="8" cols="80" placeholder="¿Por qué es un buen día?" onChange={this.addMessage}></textarea>
            </div>
            <div className="buttons__container">
              <button className="btn-submit" type="submit" onClick={this.submitDay}>GUARDAR</button>
              <button className="btn-cancel" onClick={this.cancelButton}>CANCELAR</button>      
            </div>
          </form> */}
          </Switch>
      </div>
    );
  }
}

export default App;
