import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from 'react';
import axios from 'axios';
import {Error, Loader, ArtistCard} from '../components'
import { useGetTopChartsQuery , useGetTopChartsCountryQuery} from "../redux/services/shazamCore";


const TopArtists = () => {
    //const[country, setCountry] = useState('');
    const[loading, setLoading] = useState(true);
    //const{activeSong, isPlaying} = useSelector((state)=>state.player);
    const country = 'IN';
    const {data,isFetching,error} = useGetTopChartsQuery();

    // useEffect (()=>{


    // },[country])

    if(isFetching && loading){
        return(
            <Loader title ="Loading Top Artists"/>
        );
    };

    if(error && country){
        return(
            <Error/>


        )
    };

    // <img src={artistId ? artist.artwork?.
    //     url.replace('{w}', '200').replace('{h}', '200')
    //     : songData?.images?.coverart}




return (
    <div className='fllex flex-col'>
        <h2 className='font-bold text-2xl text-white mt-4 mb-10 text-left '>Top Artists</h2>

        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
            {data?.map((track)=>(
                <ArtistCard
                key = {track.key}
                track = {track}
                
                />


            ))}

        </div>
        
    </div>




);
};


export default TopArtists;
