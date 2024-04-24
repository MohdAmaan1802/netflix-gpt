import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    //px-24
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text 6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:m-0 flex items-center">
        <button className="flex items-center justify-center bg-white text-black py-1 px-3 md:py-4 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
          <FaPlay className="mr-2" />
          Play
        </button>
        <button className="hidden md:flex items-center justify-center md:inline-block mx-2 bg-gray-500 text-white py-4 px-12 text-xl  rounded-lg hover:bg-opacity-80">
          <IoIosInformationCircleOutline className="mr-2" /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
