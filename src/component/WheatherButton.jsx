import React from 'react'
import { Button } from 'react-bootstrap';

export const WheatherButton = ({onClickCity}) => {
  return (
    <div>
        <Button variant="primary" onClick={() => onClickCity("Current")}>Current Location</Button>
        <Button variant="success" onClick={() => onClickCity("Paris")}>Paris</Button>
        <Button variant="danger" onClick={() => onClickCity("New York")}>New York</Button>
        <Button variant="info" onClick={() => onClickCity("Hanoi")}>Hanoi</Button>
        <Button variant="light" onClick={() => onClickCity("Tokyo")}>Tokyo</Button>
    </div>
  )
}
