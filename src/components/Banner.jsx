import React, { useEffect, useState } from "react";
import {API_KEY,baseImageUrl} from '../constants/constants'
import axios from '../axios'

function Banner() {
    const [trending,setTrending]=useState({})
    useEffect(() => {
      axios.get(`/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
        const num=Math.floor(Math.random() * res.data.results.length) + 1
        setTrending(res.data.results[num])
      })
    }, [])
    
  return (
    <div className="w-full h-[550px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img className="w-full h-full object-cover" src={baseImageUrl+trending?.backdrop_path} alt="" />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-bold">{trending?.title}</h1>
          <div className="my-4 font-bold">
            <button className="border bg-gray-300 text-black broder-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border  text-white broder-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">Movie Released: {trending?.release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{trending?.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
