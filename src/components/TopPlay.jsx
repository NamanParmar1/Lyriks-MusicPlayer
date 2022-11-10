import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";

import { playPause, setActiveSong } from "../redux/features/playerSlice";
import PlayPause from './PlayPause';
import { useGetTopChartsQuery , useGetTopChartsGenreQuery} from "../redux/services/shazamCore";

import 'swiper/css';
import 'swiper/css/free-mode';

const TopChartCard = ({ song, i, isPlaying,activeSong,handlePauseClick,handlePlayClick }) => (
  <div className=" flex flex-row items-center hover:bg-[#4c426e] py-2 pr-2 rounded-lg cursor-pointer  ">

    <h3 className="font-bold text-base pr-2  text-gray-300">{i + 1}. </h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img className ="w-11 h-11 rounded-lg" src = {song?.images?.coverart} alt={song?.title}/>
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to ={`/songs/${song.key}`}>
          <p className="text-base font-bold text-gray-400">{song?.title}</p>
        </Link>
        <Link to ={`/artists/${song?.artists[0].adamid}`}>
          <p className="text-sm text-gray-500 mt-1">{song?.subtitle}</p>
        </Link>

      </div>

    </div>

    <PlayPause isPlaying={isPlaying}
    activeSong ={activeSong} song = {song}
    handlePause = {handlePauseClick} handlePlay = {handlePlayClick}
    size ={25} 
    />

  </div>

);


const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behaviour: 'smooth' });

  });

  const topPlays = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));

  };

  const handlePlayClick = (song , i) => {
    dispatch(setActiveSong({song, data, i }));
    dispatch(playPause(true));

  };

  return (
    <div ref={divRef} className=" md:flex  xl:ml-6 ml-0  xl:mb-0 mb-4 flex-1 
    xl:max-w-[330px] max-w-full flex-col">
      <div className="w-full flex flex-col">


        <div className="flex flex-row justify-between items-center mt-0">
          <h2 className="text-white font-bold text-2xl"> Top Charts</h2>
          <Link to="/top-charts">
            <p className="text-gray-400 text-base cursor-pointer">See more</p>
          </Link>

        </div>
        <div className=" mt-3 flex flex-col gap-0 bg-gradient-to-l from-white/5 rounded-md" >
          {topPlays?.map((song, i) => (
            <TopChartCard key={song.key} song={song} i={i}
            isPlaying={isPlaying} activeSong ={activeSong} 
            handlePauseClick = {handlePauseClick}
            handlePlayClick = {() => handlePlayClick(song,i)}/>

          ))}

        </div>
      </div>
      <div className="w-full md:flex hidden flex-col mt-3">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl"> Top Artists</h2>
          <Link to="/top-artists">
            <p className="text-gray-400 text-base cursor-pointer">See more</p>
          </Link>

        </div>
        <Swiper slidesPerView="auto"
        spaceBetween ={15}
        freeMode 
        centeredSlides
        centeredslideBounds
        modules ={[FreeMode]}
        className="mt-4 bg-gradient-to-l from-white/5 rounded-md">
          {topPlays?.map((song,i)=>(
            <SwiperSlide
              key ={song?.key}
              style = {{width:'25%', height: 'auto'}}
              className ="shadow-lg rounded-full animate-slideright bg-gradient-to-r from-white/5" 
              >
                <Link to={`/artists/${song?.artists[0].adamid}`}>
                  <img src ={song?.images.background} alt="name" 
                  className="rounded-full w-full object-cover"/>
                </Link>

            </SwiperSlide>

          ))}

        </Swiper>


      </div>


    </div>
  )

}

export default TopPlay;
