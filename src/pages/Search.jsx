import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {Error, Loader, SongCard} from '../components'
import { useGetTopChartsQuery , useGetTopChartsCountryQuery,useGetSearchSongQuery} from "../redux/services/shazamCore";


const Search = () => {
    //const[country, setCountry] = useState('');
    const {searchTerm} = useParams();
    //const[loading, setLoading] = useState(true);
    const{activeSong, isPlaying} = useSelector((state)=>state.player);
    //const country = 'IN';
    const {data,isFetching,error} = useGetSearchSongQuery(searchTerm);


    const songs = data?.tracks?.hits?.map((song)=>song.track);





    // useEffect (()=>{


    // },[country])

    if(isFetching){
        return(
            <Loader title ="Searching..."/>
        );
    };

    if(error && country){
        return(
            <Error/>


        )
    };




return (
    <div className='fllex flex-col'>
        <h2 className='font-bold text-2xl text-white mt-4 mb-10 text-left '>
          Showing results for <span className='font-black'>{searchTerm} </span>
          </h2>

        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            {songs?.map((song,i)=>(
                <SongCard
                key = {song.key}
                song = {song}
                isPlaying ={isPlaying}
                activeSong = {activeSong}
                data = {data}
                i ={i}
                />


            ))}

        </div>
        
    </div>




);
};


export default Search;
