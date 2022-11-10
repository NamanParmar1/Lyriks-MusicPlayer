import { useNavigate } from "react-router-dom";


const ArtistCard = ({track}) => {
  const navigate = useNavigate();


  return (
    <div className="flex flex-col  w-[220px] p-2 bg-gradient-to-b from-white/5 bg-opacity-80 backdrop-blur-sm
     animate-slideup rounded-lg cursor-pointer"
      onClick={()=> navigate(`/artists/${track?.artists[0].adamid}`)}>
      <p className="mb-4 font-semibold text-lg text-gray-300 truncate p-3">{track?.subtitle}</p>

      <img alt="artist" src ={track?.images.coverart} className="w-30 h-30 rounded-lg "/> 

    </div>
  )
};

export default ArtistCard;
