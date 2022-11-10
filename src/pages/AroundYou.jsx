import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from 'react';
import axios from 'axios';
import {Error, Loader, SongCard} from '../components'
import { useGetTopChartsQuery , useGetTopChartsCountryQuery} from "../redux/services/shazamCore";


const AroundYou = () => {
    //const[country, setCountry] = useState('');
    const[loading, setLoading] = useState(true);
    const{activeSong, isPlaying} = useSelector((state)=>state.player);
    const country = 'IN';
    const {data,isFetching,error} = useGetTopChartsCountryQuery(country);

    // useEffect (()=>{


    // },[country])

    if(isFetching && loading){
        return(
            <Loader title ="Loading songs around you"/>
        );
    };

    if(error && country){
        return(
            <Error/>


        )
    };




return (
    <div className='fllex flex-col'>
        <h2 className='font-bold text-2xl text-white mt-4 mb-10 text-left '>Around You</h2>

        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            {data?.map((song,i)=>(
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


export default AroundYou;
