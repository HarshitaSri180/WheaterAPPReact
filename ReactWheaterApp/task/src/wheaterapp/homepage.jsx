import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './style.css'
import humidity from '../assets/images/humidity.png';
import search from '../assets/images/search.png';
import rain from '../assets/images/rain.png';
import wind from '../assets/images/wind.png';



function homepage() {

  
  return (
    <div>
       <div className="container px-2">
      <center>
        <div className="card rounded-2 border-0 m-5 p-4 rounded-4 shadow-lg" style={{width: "32rem"}}>
          <div className="p-5 d-flex justify-content-between formSearch">
            <input className="rounded-5 border-0 p-3 px-5 shadow" type="text" placeholder="search" />
            <button className="btn shadow-2 text-dark rounded-5 bg-white  searchButton">
              <img src={search}className="w-50" alt="search" />
            </button>
          </div>
         
          <div className="text-center">
            <img className="wheater-Icon w-25" src={rain} alt="rain"  />
            <h1 className="text-white temp">22c</h1>
            <p className="text-white city text-xs">New york</p>
          </div>
          <div className="details m-4">
            {/* <!-- for humidity --> */}
            <div className="row justify-content-between">
              <div className="col text-white d-flex">
                <img className="Wind-speed w-25 mt-2" src={humidity}/>
                <div className="windSpeed mx-4">
                <p className="h5 my-2 mt-2 humidity ">50%</p>
                <p className="h6">Humidity</p>
              </div>
            
              </div>
              {/* <!-- for windSpeed --> */}
              <div className="col text-white d-flex">
                <img className="Wind-speed w-25 mt-2" src={wind} alt='wind'/>
                <div className="windSpeed mx-4">
                <p className="h5 my-2 mt-2 wind">15km/h</p>
                <p className="h6">wind speed</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
    </div>
  )
}

export default homepage
