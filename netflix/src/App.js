import './App.css';
import Banner from './components/Banner/Banner';
import NavbarDiv from './components/navbar/navbarDiv';
import Slider from './components/Slider/Slider';
import axios from './axios/axios'
import { imageURL, bannerFilmDetails, originals } from './constants/constant';
import { useEffect, useState } from 'react';



function App() {

  // data for banner div
  const [bannerArray, setbannerArray] = useState([]); 
  

  useEffect(()=>{
    axios.get(`${bannerFilmDetails}`).then((response)=>{
      setbannerArray(response.data.results[18])
    })
  },[])
  
  const backgroundImage=imageURL+bannerArray.backdrop_path
  const title=bannerArray.title
  const overview=bannerArray.overview


  return (
    <div className="App">
      <NavbarDiv></NavbarDiv>   
      <Banner backgroundImage={backgroundImage} title={title} overview={overview}></Banner> 
      <Slider title="Originals" APIURL={originals}></Slider>
      <Slider title="another One" isSmall APIURL={originals}></Slider>
    </div>
  );
}

export default App;
