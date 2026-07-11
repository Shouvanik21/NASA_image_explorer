const axios = require("axios");

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
    // console.log(images.length)

    // //CONVERT NASA'S RESPONSE TO AN ARRAY
    const formattedImages = images.slice(0, 5).map((image) => {
      return {
        title: image.data?.[0]?.title,
        description: image.data?.[0]?.description,
        imageUrl: image.links?.[0]?.href,
        date: image.data?.[0]?.date_created,
      };
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
