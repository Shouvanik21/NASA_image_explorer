import React from "react";
import { useState } from "react";
import api from "./services/api";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);

  const searchImages = async () => {
    try {
      const response = await api.get(`/${search}`);
      setImages(response.data);
      console.log(images)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="h-screen w-screen text-white bg-black">
      <h1>Space Image Explorer</h1>
      <SearchBar
        search={search}
        setSearch={setSearch}
        searchImages={searchImages}
      />
    </div>
  );
};

export default App;
