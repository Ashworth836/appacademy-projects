import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTweet } from "./store/tweet";

const CreateTweet = () => {
  const [tweetText, setTweetText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tweetText.trim() !== "") {
      dispatch(addTweet({ text: tweetText }));
      setTweetText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="tweet">Create a new tweet:</label>
      <input
        type="text"
        id="tweet"
        value={tweetText}
        onChange={(e) => setTweetText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateTweet;
