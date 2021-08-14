import React, { useEffect, useState } from "react";
import axios from "axios";

const Trending = () => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(`
        https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);
    setContent(data.result);
  };

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content && content.map((c) => console.log(c))}
      </div>
    </div>
  );
};

export default Trending;
