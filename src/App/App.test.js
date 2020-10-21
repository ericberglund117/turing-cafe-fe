import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('should allow a user to make a reservation', () => {
    const mockAddReservation = jest.fn()
    const mockReservation = jest.fn()
    render(<App />);

    const nameInput = screen.getByPlaceholderText('Name');
    const dateInput = screen.getByPlaceholderText('Date(mm/dd)');
    const timeInput = screen.getByPlaceholderText('Time');
    const numberInput = screen.getByPlaceholderText('Number of guests');

    nameInput.value = "Mike Meyers";
    dateInput.value = '10/31';
    timeInput.value = '12:00';
    numberInput.value = 1;

    fireEvent.change(nameInput);
    fireEvent.change(dateInput);
    fireEvent.change(timeInput);
    fireEvent.change(numberInput);

    const makeReservationButton = screen.getByRole('button', { name: 'Make Reservation'})

    expect(makeReservationButton).toBeInTheDocument();
    fireEvent.click(makeReservationButton);
    expect(mockReservation).toHaveBeenCalledTimes(1)

    const reservationContainer = screen.getByTitle('make-reservation');
    const name = screen.getByText('Mike Meyers')
    const date = screen.getByText('10/31')
    const time = screen.getByText('12:00')
    const number = screen.getByText('Number of Guests: 1')
    expect(reservationContainer).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(time).toBeInTheDocument();
    expect(number).toBeInTheDocument();
  })
})
