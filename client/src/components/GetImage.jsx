import { useLocation } from "react-router-dom";
import ImageCard from "./ImageCard";
import image from "../assets/nebulaimg4.jpg"

const GetImage = () => {
  const location = useLocation();
  const images = location.state;

  return (
    <div  className="absolute w-full min-h-screen bg-repeat-y bg-top" style={{
  backgroundImage: `url(${image})`,
  backgroundSize: "100% auto",
}}>

        

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
        {images.map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default GetImage;
