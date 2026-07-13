const axios = require("axios");
const downloadModel = require("../models/Download");

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

const getImages = async (req, res) => {
  try {
    const search = req.params.search;

    const response = await axios.get("https://images-api.nasa.gov/search", {
      params: {
        q: search,
        media_type: "image",
      },
    });

    //GET ALL IMAGES
    const images = response.data.collection.items;

    //SHUFFLE THE IMAGES ARRAY
    const shuffledImages = shuffle(images);
    const randomImages = shuffledImages.slice(0, 6);

    // //CONVERT NASA'S RESPONSE TO AN ARRAY
    const formattedImages = randomImages.map((image) => {
      return {
        title: image.data?.[0]?.title,
        description: image.data?.[0]?.description,
        imageUrl: image.links?.[0]?.href,
        date: image.data?.[0]?.date_created,
      };
    });

    //STORE RANDOM IMAGES IN MONGODB
    await downloadModel.create({
      search: req.params.search,
      images: formattedImages,
    });

    res.json(formattedImages);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "failed to fetch images",
    });
  }
};

module.exports = { getImages };
