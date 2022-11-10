import {FaPauseCircle, FaPlayCircle} from 'react-icons/fa'


const PlayPause = ({isPlaying, activeSong, song, handlePause, 
  handlePlay,size}) => (isPlaying && activeSong ?.title === song.title?
    (
      <FaPauseCircle  size ={size} className='text-gray-400' onClick={handlePause}/>
    ):(
      <FaPlayCircle size ={size} className ='text-gray-400' onClick={handlePlay}/>
    )
  ); 


export default PlayPause;
