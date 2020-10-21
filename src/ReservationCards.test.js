import React from 'react';
import ReservationCards from './ReservationCards';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';

describe('Reservation Cards', () => {
  it('should render a reservation card', () => {
    const reservations = [{
        id: 18907223,
        name: 'Mike Meyers',
        date: '10/31',
        time: '12:00',
        number: 1
      }];

    render(<ReservationCards reservations={reservations} />)

    const name = screen.getByText('Mike Meyers')
    const date = screen.getByText('10/31')
    const time = screen.getByText('12:00')
    const number = screen.getByText('Number of Guests: 1')
    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(number).toBeInTheDocument();
  })
})
