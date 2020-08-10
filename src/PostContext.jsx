import React, { useState, createContext } from "react";

export const PostContext = createContext();

export const PostProvider = (props) => {
  const [allPost, setAllPost] = useState([
    {
      _id: "5f318415e731b7134df9c82e",
      comments: [],
      date: "2020-08-10T16:56:48.196+00:00",
      title: "hello",
      likes: 0,
      dislikes: 0,
      hearts: 0,
    },
  ]);
  return (
    <PostContext.Provider value={[allPost, setAllPost]}>
      {props.children}
    </PostContext.Provider>
  );
};
