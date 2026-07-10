const getCategories = async (req, res) => {
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

  res.json(categories);
};

module.exports = {
  getCategories,
};
