import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./Feedbar.css";
import axios from "axios";

function Feedbar() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/timeline/6437fd4ccef787c3d5fd0051");
      setPosts(res.data);
    };
    fetchPosts();
  });
  return (
    <div className="feedbar">
      {/* <input type="text" onChange={}/> */}
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

export default Feedbar;
