import { useState, useEffect } from "react";
import axios from "../axiosConfig";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("/api/posts/allposts");
        setPosts(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/posts/new", { content });
      setPosts((prevPosts) => [...prevPosts, response.data]); 
      setContent(""); 
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handlePostSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Escribe AQUÍ"
        />
        <button type="submit">Post</button>
      </form>
      <div>
      <h1>All Posts</h1>
{posts.map((user) => (
  user.posts.map((post) => (
    <div key={post._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <p>{post.content}</p>
      <p>
        <strong>Autor:</strong> 
        {user.name ? `${user.name}` : "Autor no disponible"}
      </p>
      <small>
        {isNaN(new Date(post.timestamp)) ? "Fecha inválida" : new Date(post.timestamp).toLocaleString()}
      </small>
    </div>
  ))
))}
      </div>
    </div>
  );
}

export default Posts;