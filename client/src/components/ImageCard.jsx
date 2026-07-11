const ImageCard = ({ image }) => {
  return (
    <div
      className="
      overflow-hidden
      rounded-2xl
      bg-slate-900
      border
      border-slate-800
      shadow-xl
      hover:shadow-sky-500/20
      hover:-translate-y-2
      hover:scale-[1.02]
      transition-all
      duration-300
      border border-blue/20 bg-white/10 p-8 backdrop-blur-md
      "
    >
      <img
        src={image.imageUrl}
        alt="image not found"
        className="
        h-64
        w-full
        object-cover
        "
      />

      <div className="p-5">
        <h2 className="text-xl font-bold">{image.title}</h2>

        <p className="text-sky-400 text-sm mt-2">{image.date}</p>

        <p className="text-gray-400 mt-4 text-sm leading-7 line-clamp-4">
          {image.description}
        </p>

        <a
          href={image.imageUrl}
          target="_blank"
          rel="noreferrer"
          className="
          inline-block
          mt-6
          bg-sky-500
          hover:bg-sky-600
          px-5
          py-2
          rounded-lg
          font-medium
          transition"
        >
          View Full Image
        </a>
      </div>
    </div>
  );
};

export default ImageCard;
