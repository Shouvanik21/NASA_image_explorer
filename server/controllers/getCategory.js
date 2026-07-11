const getCategories = async (req, res) => {
  try {
    const categories = [
      {
        id: 1,
        name: "Galaxies",
        description: "Massive systems of stars, gas and dust.",
      },

      {
        id: 2,
        name: "Nebulae",
        description: "Clouds where new stars are born.",
      },

      {
        id: 3,
        name: "Planets",
        description: "Worlds orbiting stars.",
      },

      {
        id: 4,
        name: "Star Clusters",
        description: "Groups of stars held together by gravity.",
      },

      {
        id: 5,
        name: "Supernovae",
        description: "Exploding stars.",
      },
    ];

    res.status(200).json({
      message: "categories found",
      category: categories,
    });
  } catch {
    (err) =>
      res.status(500).json({
        message: err.message,
      });
  }
};

module.exports = {
  getCategories,
};
