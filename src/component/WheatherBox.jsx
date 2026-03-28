import React from 'react'

export const WheatherBox = ({weather}) => {
    //console.log("weather:", weather)

  return (
    <div className='weather-box'>
        {!weather ? '날씨 정보가 존재하지 않습니다.' : 
          (
            <div>
              <div>{weather?.name}</div>
              <h2>{weather?.main.temp}C / {(weather?.main.temp * 1.8 + 32).toFixed(2)}화씨</h2>
              <h3>{weather?.weather[0].description}</h3>        
            </div>
          )
        }
    </div>
  )
}
