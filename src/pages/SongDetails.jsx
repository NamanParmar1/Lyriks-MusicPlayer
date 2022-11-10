import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DetailsHeader,Error,Loader,RelatedSongs } from "../components";

import { setActiveSong,playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery,useGetSongRelatedQuery } from "../redux/services/shazamCore";




const SongDetails = () =>{
    const dispatch = useDispatch();
    const{songid} = useParams();
    const {activeSong , isPlaying} = useSelector((state)=>state.player);

    const{data: songData , isFetching : isFetchingSongDetails} = useGetSongDetailsQuery({songid});
    const{data: data , isFetching : isFetchingRelatedSongDetails,error} = useGetSongRelatedQuery({songid});

    
    
    const handlePauseClick = () =>{
        dispatch(playPause(false));
    
      };
      
      const handlePlayClick = (song, i) =>{
        dispatch(setActiveSong({song,data,i}));
        dispatch(playPause(true));
    
      };
    
    
    if(isFetchingSongDetails || isFetchingRelatedSongDetails){
        return (
            <Loader title ="Searching Song Details"/>
        )
    }

    if(error){
        return(
            <Error/>
        )
    }

    


    


    
    
    return (
        <div className="flex flex-col">
            <DetailsHeader artistId = "" songData ={songData} />

            <div className="mb-10 bg-gradient-to-r from-white/5  rounded-2xl pl-5">
                <h2 className="text-gray-300 text-3xl font-bold"> Lyrics:</h2>

                <div className="mt-5">
                    {songData?.sections[1].type==='LYRICS'
                    ? songData?.sections[1].text.map((line,i)=>(
                        <p className="text-gray-400 text-base my-1">{line}</p>
                    )) : <p>Sorry, no lyrics found!</p>}

                </div>
            </div>

            <RelatedSongs 
            data = {data} isPlaying ={isPlaying} activeSong = {activeSong}
            handlePauseClick = {handlePauseClick} handlePlayClick ={handlePlayClick}/>

        </div>


    )
} ;










export default SongDetails;