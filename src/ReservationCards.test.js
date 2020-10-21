import React from 'react';
import ReservationCards from './ReservationCards';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';

describe('Reservation Cards', () => {
  it('should render a reservation card', () => {
    const reservations = [{
      id: 18907224,
      name: 'Christie',
      date: '8/8',
      time: '7:00',
      number: 3
      },
      {
        id: 18907223,
        name: 'Mike Meyers',
        date: '10/31',
        time: '12:00',
        number: 1
      }];

    render(<ReservationCards reservations={reservations} />)

    const name = screen.getByText('Christie')
    const date = screen.getByText('8/8')
    const time = screen.getByText('7:00')
    const number = screen.getByText('3')
    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(number).toBeInTheDocument();
  })
})
