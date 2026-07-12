import { useLocation } from "react-router-dom";
import ImageCard from "./ImageCard";
import image from "../assets/nebula.jpg";

const ImagePage = () => {
  const location = useLocation();
  const images = location.state;

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="min-h-screen bg-black/75">
        {/* Header */}

        <div className="text-center pt-14 pb-10">
          <h1 className="text-5xl font-extrabold text-white">
            🚀 Space Image Explorer
          </h1>

          <p className="mt-4 text-lg text-gray-300">
            Showing
            <span className="text-orange-300 font-semibold">
              {" "}
              {images.length}{" "}
            </span>
            Images
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 px-10 pb-16">
          {images.map((image, index) => (
            <ImageCard key={index} image={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImagePage;
