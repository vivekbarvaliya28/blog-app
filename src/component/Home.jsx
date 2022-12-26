import React from "react";
import Post from "./Post";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [post, setPost] = useState([]);

  let postFrom = Math.floor(Math.random() * 90 + 5);

  const options = {
    method: "GET",
    url: "https://programmer-humor.p.rapidapi.com/api/9gag",
    params: { after: `${postFrom}` },
    headers: {
      "X-RapidAPI-Key": "d1662bb0c7mshd8dd223519be344p19818ejsn8b06c3747251",
      "X-RapidAPI-Host": "programmer-humor.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setPost(response.data);
      })
      .catch(function (error) {
        console.error(error);
        alert("unable to fetch data");
      });
  }, []);

  const card = (item, index) => {
    return (
      <Post
        key={index}
        title={item.title}
        img={item.media}
        tag={item.source.slice(5)}
        date={item.posted.slice(0, 10)}
        upVotes={item.upvotes}
        postSource={`https://9gag.com/gag/${item.name}`}
      />
    );
  };

  return <div className="post-container">{post.map(card)}</div>;
};

export default Home;
