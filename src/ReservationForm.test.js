import React from 'react';
import ReservationForm from './ReservationForm'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom';

const mockAddReservation = jest.fn();

describe('Make a Reservation', () => {
  it('Should render a reservation input field', () => {
    render(<ReservationForm addReservation={ mockAddReservation } />);

    const reservationContainer = screen.getByTitle('make-reservation');
    const nameInput = screen.getByPlaceholderText('Name');
    const dateInput = screen.getByPlaceholderText('Date(mm/dd)');
    const timeInput = screen.getByPlaceholderText('Time');
    const numberInput = screen.getByPlaceholderText('Number of guests');

    expect(reservationContainer).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
    expect(numberInput).toBeInTheDocument();
  })

  it('should change input values when a user fills out a reservation', () => {
    render(<ReservationForm addReservation={ mockAddReservation } />);

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
  })
})
