import "./Profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feedbar from "../../components/feed/Feedbar";
import Rightbar from "../../components/rightbar/Rightbar";

function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img src={`${PF}cover.jpg`} className="profileCoverimg" alt="" />
              <img src={`${PF}userimg.jpg`} className="profileUserimg" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Jack Adams</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feedbar />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
