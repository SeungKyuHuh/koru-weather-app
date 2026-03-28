import React from 'react'
import { Button } from 'react-bootstrap';

export const WheatherButton = ({cities, setCity, selected, setSelected}) => {

  return (
    <div className="d-flex gap-2 flex-wrap justify-content-center"> 
        <Button  variant={selected === "current" ? "danger" : "warning"}
          onClick={()=> {
            setCity('');
            setSelected("current");
          }}>Current Location</Button>

        {cities.map((item, index) => (
          <Button 
            variant={selected === item ? 'danger' : 'warning'}
            key={index}
            onClick={()=> {
              setCity(item);
              setSelected(item);
            }}>{item}</Button>
        ))}

    </div>
  )
}
