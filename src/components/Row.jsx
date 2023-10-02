import React, { useEffect, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import "./Row.css";
import axios from "../axios";
import { API_KEY, baseImageUrl } from "../constants/constants";
import YouTube from "react-youtube";

function Row({ rowId, url, title }) {
  const [slide, setSlide] = useState([]);
  const [ytUrl, setYtUrl] = useState();
  const opts = {
    height: "550px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data)
        setSlide(res.data.results);
      })
      .catch((err) => {
        console.log(rowId, err.message);
      });
  });
  const handleVideo = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res) => {
        if (res.data.results.length) {
          setYtUrl(res.data.results[0]);
        }
      });
  };

  const slideLeft = () => {
    let scroll = document.getElementById("slider" + rowId);
    scroll.scrollLeft -= 500;
  };
  const slideRight = () => {
    let scroll = document.getElementById("slider" + rowId);
    scroll.scrollLeft += 500;
  };
  return (
    <div>
      {ytUrl&& (<YouTube opts={opts} videoId={ytUrl.key}/>)}

      <p className="font-bold md:text-xl p-4">{title}</p>
      <div className="relative flex items-center group ">
        <BsFillArrowLeftCircleFill
          onClick={slideLeft}
          className="left-0 absolute rounded-full opacity-50 hover:opacity-100 hover:cursor-pointer z-10 hidden group-hover:block"
          size={30}
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative"
        >
          {slide.map((card) => {
            return (
              <div
                onClick={() => handleVideo(card.id)}
                className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
              >
                <img
                  className="w-full h-auto block"
                  src={baseImageUrl + card.backdrop_path}
                  alt=""
                />
                <div className="absolute top-0 left-0  h-full w-full hover:bg-black/80 opacity-0 hover:opacity-100 transition duration-500">
                  <p className="flex justify-center items-center h-full text-xs md:text-base">
                    {card.name}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <BsFillArrowRightCircleFill
          onClick={slideRight}
          className="right-0 absolute rounded-full opacity-50 hover:opacity-100 hover:cursor-pointer z-10 hidden group-hover:block"
          size={30}
        />
      </div>
    </div>
  );
}

export default Row;
