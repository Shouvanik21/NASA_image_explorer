import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import nebula from "../assets/nebula2.jpg"
import SearchBar from "./SearchBar"

const Home = () => {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);

  const navigate=useNavigate()

  const searchImages = async () => {
    try {
      console.log("Searching:", search);
      const response = await api.get(`/${search}`);
      console.log("API returned:", response.data);
      setImages(response.data);

      navigate("/image-card",{state:response.data})
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={nebula}
        alt="Space"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Main Content */}
      <div className="relative z-10 flex h-full items-center justify-evenly px-20">
        {/* Left Side */}
        <div className="max-w-xl">
          <h1 className="text-6xl font-extrabold leading-tight text-white">
            Explore The
            <br />
            Universe
            <br />
            One Search
            <br />
            At A Time
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-300">
            Discover breathtaking NASA images of planets, galaxies, nebulae,
            astronauts and deep space through a simple and beautiful search
            experience.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-[450px] rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-md mr-[-10px]">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            🚀 Space Image Explorer
          </h2>

          <SearchBar
            search={search}
            setSearch={setSearch}
            searchImages={searchImages}
          />
        </div>

        
      </div>
    </div>
  );
};

export default Home;
