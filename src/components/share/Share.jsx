import { EmojiEmotions, Label, PermMedia, Room } from "@mui/icons-material";
import "./Share.css";

function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src="./assets/person/pic5.jpg"
            height={32}
            width={32}
            alt=""
            className="shareimg"
          />
          <input
            placeholder="what's in your mind Safak?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareoptions">
            <div className="shareoption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareoptionText">Photo or Video</span>
            </div>
            <div className="shareoption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareoptionText">Tag</span>
            </div>
            <div className="shareoption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareoptionText">Location</span>
            </div>
            <div className="shareoption">
              <EmojiEmotions htmlColor="#C70039" className="shareIcon" />
              <span className="shareoptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
