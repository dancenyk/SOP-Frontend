import { useState, useEffect } from "react";
import axios from "../axiosConfig";
import PostCard from "./PostCard";

function Posts() {
  const [posts, setPosts] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/posts/allposts");
        const data = Array.isArray(response.data) ? response.data : [];

        const allPosts = [];

        data.forEach((user) => {
          user.posts.forEach((post) => {
            allPosts.push({
              ...post,
              authorName: user.name,
            });
          });
        });

        allPosts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        setPosts(allPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) {
      setError("No puedes subir un post vacío.");
      return;
    }

    setError(""); 
    try {
      const response = await axios.post("/api/posts/new", { content });
      const newPost = response.data;

      const updatedPost = {
        ...newPost,
        authorName: newPost.authorName,
      };

      setPosts((prevPosts) => {
        const updatedPosts = [newPost, ...prevPosts];
        return updatedPosts.sort(
          (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
        );
      });

      setContent("");
    } catch (error) {
      console.error("Error creando el post:", error);
    }
  };

  return (
    <div className="posts-container">
      <form className="post-form" onSubmit={handlePostSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Escribe AQUÍ"
        />
        {error && <p className="error-message">{error}</p>}
        <div className="btn-post">
        <button type="submit">Publicar</button>
        <button type="button" onClick={() => setContent("")}>
          Cancelar
        </button>
        </div>
    
      </form>
      <div>
        {!posts
          ? "loading"
          : posts.map((post) => (
            <PostCard
            key={post._id}
            content={post.content}
            authorName={post.authorName}
            timestamp={post.timestamp}
          />
            ))}
      </div>
    </div>
  );
}

export default Posts;
