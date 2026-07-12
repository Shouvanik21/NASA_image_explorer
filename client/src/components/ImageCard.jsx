const ImageCard = ({ image }) => {
  return (
    <div
      className="
group
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/5
backdrop-blur-xl
shadow-2xl
transition-all
duration-500
hover:-translate-y-2
hover:scale-[1.02]
hover:border-orange-300/30
hover:shadow-orange-500/20
"
    >
      <img
        src={image.imageUrl}
        alt="image not found"
        className="
w-full
h-56
object-cover
rounded-t-3xl
transition-transform
duration-700
group-hover:scale-105
"
      />

      <div className="p-8">
        <h2 className="text-2xl font-bold tracking-tight text-white">{image.title}</h2>

        <p className="text-orange-300 text-sm mt-3 font-medium">
    📅 {new Date(image.date).toLocaleDateString("en-GB",{
        day:"numeric",
        month:"short",
        year:"numeric"
    })}
</p>

        <p className="
mt-5
text-gray-300
leading-7
text-[15px]
line-clamp-4
">
          {image.description}
        </p>

        <a
          href={image.imageUrl}
          target="_blank"
          rel="noreferrer"
          className="
inline-block
mt-8
rounded-xl
bg-gradient-to-r
from-orange-500
to-amber-500
px-6
py-3
font-semibold
text-white
transition-all
duration-300
hover:scale-105
hover:from-orange-400
hover:to-amber-400
hover:shadow-lg
hover:shadow-orange-500/30
"
        >
          View Full Image
        </a>
      </div>
    </div>
  );
};

export default ImageCard;
