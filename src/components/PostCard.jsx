import React from "react";


function PostCard({ content, authorName, timestamp }) {
    return (
      <div className="post-card">
        <div className="post-header">
          <span className="post-author">{authorName || "Autor no disponible"}</span>
          <span className="post-timestamp">
            {isNaN(new Date(timestamp))
              ? "Fecha inválida"
              : new Date(timestamp).toLocaleString()}
          </span>
        </div>
        <div className="post-separator">
          <img src="src/assets/separator.png" alt="separador" />
        </div>
        <div className="post-content">{content}</div>
      </div>
    );
  }

export default PostCard;