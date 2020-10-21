import React, { Component } from 'react';

class ReservationCards extends Component {
  constructor(props) {
    super(props)
  }

  createResCards = () => {
    return this.props.reservations.map ((res, index) => {
      return (
        <section className='card'>
          <h2>{res.name}</h2>
          <h3>{res.date}</h3>
          <h3>{res.time}</h3>
          <h3>Number of Guests: {res.number}</h3>
          <button
            type='button'
            className='cancel-res'
            onClick={event => this.cancelRes(event)}>
            Cancel
          </button>
        </section>
      )
    })
  }

  render() {
    return (
      <div>
      {this.createResCards()}
      </div>
    )
  }
}

export default ReservationCards;
