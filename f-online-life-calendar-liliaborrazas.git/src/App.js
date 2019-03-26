import React, { Component } from 'react';
import './App.css';
import ListFace from './components/ListFace';
import Form from './components/Form';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      faces: [],
      date: '',
      status: '',
      message: ''
    };
    //meter objeto
    this.submitDay = this.submitDay.bind(this);
    this.addDate = this.addDate.bind(this);
    this.addFace = this.addFace.bind(this);
    this.addMessage = this.addMessage.bind(this);
    this.cancelButton = this.cancelButton.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('infoCalendar')) {
      this.setState({ faces: JSON.parse(localStorage.getItem('infoCalendar')) });
    }
  }

  submitDay() {
    this.setState({
      faces: [
        ...this.state.faces,
        { date: this.state.date, status: this.state.status, message: this.state.message }
      ]
    });
    this.cancelButton();
  }

  addDate(e) {
    this.setState({ date: e.target.value });
  }

  addFace(e) {
    this.setState({ status: e.target.value });
  }

  addMessage(e) {
    this.setState({ message: e.target.value });
  }

  cancelButton() {
    this.setState({
      date: '',
      status: '',
      message: ''
    });
  }

  componentDidUpdate() {
    localStorage.setItem('infoCalendar', JSON.stringify(this.state.faces));
  }

  render() {
    return (
      <div className="app">
        <header className="plus__button">
          <h1 className="title">Calendario</h1>
        </header>
        <Switch>
          <Route exact path="/" render={() => 
           <ListFace faces={this.state.faces} />} />
          <Route
            path="/formulario"
            render={() => (
              <Form
                addDate={this.state.addDate}
                addFace={this.addFace}
                addMessage={this.addMessage}
                cancelButton={this.cancelButton}
                submitDay={this.submitDay}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
