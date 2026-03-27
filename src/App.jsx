import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { WheatherBox } from './component/WheatherBox';
import { WheatherButton } from './component/WheatherButton';

// 1. 앱 실행 시 현재 위치기반의 날씨
// 2. 날씨정보에는 도시, 섭씨 화씨 날씨 상태
// 3. 5개의 버튼(현재위치, 각각 다른 도시 4개)
// 4. 도시버튼을 누를 때마다 도시별 날씨
// 5. 현재 위치 버튼을 누르면 다시 현재위치 기반 날씨로
// 6. 데이터를 가지고 오는 동안 로딩 스피너가 돈다
const apiKey = "85eee8ed14837e46d20aba7f31793269";

function App() {
  const [weather, setWeather] = useState(null);
  const getCurrentLocation = () =>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      getWeatherByCurrentLocation(lat, lon)
      // fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid="+apiKey)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   })
      // console.log("현재 위치", lat, lon);
    });
  }

  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    let res = await fetch(url);
    let data = await res.json();

    setWeather(data);
    //console.log("data", data);
  }

  const getWeatherByCity = async(city) => {
    console.log("city:", city);
    if(city === "Current"){
      getCurrentLocation();
    } else {
      let url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`;
      let res = await fetch(url);
      let data = await res.json();

      let lat = data[0].lat;
      let lon = data[0].lon;

      getWeatherByCurrentLocation(lat, lon)
      console.log("data", data);
      //setWeather(data);
    }
    

  }

   useEffect(() => {
    getCurrentLocation()
   }, []);

  return (
    <div>
      <div className='container'>
        <WheatherBox weather={weather}/>
        <WheatherButton onClickCity={getWeatherByCity}/>
      </div>
    </div>
  )
}

export default App
