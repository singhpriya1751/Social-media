import "./Topbar.css";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
function Topbar() {
  return (
    <div className="topbarcontainer">
      <div className="topbarleft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Social_Up</span>
        </Link>
      </div>
      <div className="topbarcenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder=" search here " className="searchInput" />
        </div>
      </div>
      <div className="topbarright">
        <div className="topbarlinks">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbaricons">
          <div className="topbariconitem">
            <Person />
            <span className="topbariconbadge">1</span>
          </div>
          <div className="topbariconitem">
            <Chat />
            <span className="topbariconbadge">2</span>
          </div>
          <div className="topbariconitem">
            <Notifications />
            <span className="topbariconbadge">3</span>
          </div>
        </div>
        <img src="/assets/person/pic4.jpg" alt="images" className="topbarimg" />
      </div>
    </div>
  );
}

export default Topbar;
