import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ReservationForm extends Component {
  constructor() {
    super()
      this.state ={
        name: '',
        date: '',
        time: '',
        number: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  makeReservation = (event) => {
    const reservation = {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number
    }
    this.props.addReservation(reservation);
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({ name:'', date:'', time:'', number:''})
  }

  render() {
    const { name, date, time, number } = this.state;
    return (
      <form className="make-reservation" title="make-reservation">
        <label htmlFor="name" className="name-label">
          name
        </label>
        <input
          type="text"
          className="name-input"
          placeholder="Name"
          name="name"
          value={name}
          onChange={ event => this.handleChange(event) }
        />
        <label htmlFor="date" className="date-label">
          name
        </label>
        <input
          type="text"
          className="date-input"
          placeholder="Date(mm/dd)"
          name="date"
          value={date}
          onChange={ event => this.handleChange(event) }
        />
        <label htmlFor="time" className="time-label">
          name
        </label>
        <input
          type="text"
          className="time-input"
          placeholder="Time"
          name="time"
          value={time}
          onChange={ event => this.handleChange(event) }
        />
        <label htmlFor="number-of-guests" className="guests-label">
          name
        </label>
        <input
          type="text"
          className="guests-input"
          placeholder="Number of guests"
          name="number"
          value={number}
          onChange={ event => this.handleChange(event) }
        />
        <button
          type="button"
          className="make-reservation"
          onClick={event => this.makeReservation(event)}>
          Make Reservation
        </button>
      </form>
    )
  }

}

export default ReservationForm;

ReservationForm.propTypes = {
  fetchReservation: PropTypes.func,
  addReservation: PropTypes.func
}
