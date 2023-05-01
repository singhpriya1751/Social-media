import { useState, useEffect } from "react";
import "./Post.css";
import axios from "axios";
import { MoreVert } from "@mui/icons-material";

export default function Post({ post }) {
  const [like, setlike] = useState(post.like);
  const [islike, setislike] = useState(false);
  const [user, setUser] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const likeHandler = () => {
    setlike(islike ? like - 1 : like + 1);
    setislike(!islike);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  });

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopleft">
            <img src={user.profilePicture} alt="" className="postprofileimg" />
            <span className="postUsername">{user.username}</span>
            <span className="postdata">{post.date}</span>
          </div>
          <div className="postTopright">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={PF + post.photo} alt="" className="postimage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=""
              className="likeIcon"
            />
            <img
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt=""
              className="likeIcon"
            />
            <span className="postlikeconter">{like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
