import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const thoughts = {
  1: {
    image: "https://cdn.pixabay.com/photo/2025/01/11/21/43/dragonfly-9326948_1280.jpg",
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
  },
  2: {
    image: "https://cdn.pixabay.com/photo/2023/11/17/16/54/boat-8394639_1280.jpg",
    quote: "Believe you can, and you're halfway there.",
  },
};

const Post = () => {
  const { id } = useParams(); // Get post ID from URL
  const navigate = useNavigate(); // Navigate to NotFound
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const randomChance = Math.random(); // Generate random number (0 to 1)
      if (randomChance < 0.3) {
        navigate("/not-found");
      } else {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response) => response.json())
          .then((data) => {
            setPost(data);
            setLoading(false);
          });
      }
    }, 2000); // Simulate 2-sec loading
  }, [id, navigate]);

  if (loading) {
    return <div className="loading">Loading Post {id}...</div>;
  }

  return (
    <div className="content">
      {thoughts[id] ? (
        <div>
          <h1>{post.title}</h1>
          <img src={thoughts[id].image} alt="Thought" style={{ width: "100%", borderRadius: "8px" }} />
          <p><strong>Thought:</strong> {thoughts[id].quote}</p>
        </div>
      ) : (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default Post;
