import React from 'react';
import PropTypes from 'prop-types';

const ReservationCards = (props) => {
  return props.reservations.map ((res, index) => {
    return (
      <section className='card' key={index}>
        <h2>{res.name}</h2>
        <h3>{res.date}</h3>
        <h3>{res.time}</h3>
        <h3>Number of Guests: {res.number}</h3>
        <button
          type='button'
          className='cancel-res'
          onClick={event => props.cancelReservation(event)}>
          Cancel
        </button>
      </section>
    )
  })
}

export default ReservationCards;

ReservationCards.propTypes = {
  reservations: PropTypes.arrayOf(PropTypes.object),
  cancelReservation: PropTypes.func
};
