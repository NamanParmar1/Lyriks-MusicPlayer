import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import  PlayPause  from './PlayPause';
import {playPause, setActiveSong} from '../redux/features/playerSlice';



const SongCard = ({song ,  i, isPlaying, activeSong, data}) => {

  const dispatch = useDispatch();


  //const activeSong = 'TEst';

  const handlePauseClick = () =>{
    dispatch(playPause(false));

  };
  
  const handlePlayClick = () =>{
    dispatch(setActiveSong({song,data,i}));
    dispatch(playPause(true));

  };


  return (
  <div className='flex flex-col w-[220px] p-4 bg-gradient-to-t from-white/5 backdrop-blur-md 
  animate-slideup rounded-lg cursor-pointer'>
    <div className='relative w-full h-48 group'>
      <div className= {`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex
      ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70':'hidden' }`
        }>
          <PlayPause  song = {song} isPlaying ={isPlaying} activeSong ={activeSong}
          handlePause={handlePauseClick} 
          handlePlay ={handlePlayClick}
          size ={35}/>
      </div>   
      <img alt = 'song-img' src = {song.images?.coverart} className="shadow-xl shadow-black"/> 

    </div>
    <div className='mt-4 flex flex-col '>
      <p className='font-semibold truncate text-gray-300 text-lg'>
        <Link to={`/songs/${song?.key}`}>
        {song.title}
        </Link>
      </p>
      <p className='text-sm truncate text-gray-500 mt-1'>
        <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}`:'/top-artists'}>
        {song.subtitle}
        </Link>
      </p>
      
    </div>
  </div>
);
};

export default SongCard;
