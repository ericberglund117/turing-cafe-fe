import React, { Component } from 'react';
import ReservationCards from '../ReservationCards.js';
import ReservationForm from '../ReservationForm.js'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => this.setState({ reservations: data }))
    .then(error => this.setState({ error: error }))
  }

  cancelReservation = (event) => {

  }

  addReservation = (reservation) => {
    this.setState({ reservations: [...this.state.reservations, reservation] })
  }

  fetchReservation = (reservation) => {
    fetch('http://localhost:3001/api/v1/reservations',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reservation)
    })
    .then(response => response.json())
    .then(data => this.setState({ reservations: [...this.state.reservations, reservation] }))
    .catch(error => this.setState({ error: error }))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ReservationForm fetchReservation={this.fetchReservation} addReservation={this.addReservation}/>
        </div>
        <div className='resy-container'>
          <ReservationCards reservations={this.state.reservations} cancelReservation={this.cancelReservation}/>
        </div>
      </div>
    )
  }
}

export default App;
