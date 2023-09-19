import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import './Slider.css'
import { imageURL } from '../../constants/constant'
import axios from '../../axios/axios'


function Slider(props) {

    //data for originals slider
    const [originalsArray, setoriginalsArray] = useState([]);
    const [youtube, setYoutube] = useState();
    const APIURL = props.APIURL
    useEffect(() => {
        axios.get(`${APIURL}`).then((response) => {
            console.log("originalArray", response.data);
            setoriginalsArray(response.data.results)
        })
    }, [APIURL])

    // const movieIdPass = (id)=>{
    //     setYoutube(1)
    // }
    // const opts = {
    //     height: '230',
    //     width: '100%',
    //     playerVars: {
    //       // https://developers.google.com/youtube/player_parameters
    //       autoplay: 0,
    //     },
    // };

    return (
        <div className='sliderMain'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {
                   originalsArray.map((movie)=>{
                    return(
                        <div>
                            <img onClick={()=> movieIdPass(movie.id) } key={movie.id} className={props.isSmall?'smallPoster':'poster'} alt='poster' src={imageURL+movie.backdrop_path}/>
                            {/* {youtube && <YouTube className={youtube?'youtubeClicked':'youtube'} videoId="2g811Eo7K8U" opts={opts} />} */}
                        </div>
                        )
                   })
                }
                
            </div>
            
        </div>
    )
}

export default Slider
