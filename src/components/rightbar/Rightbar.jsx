import "./Rightbar.css";
import { Users } from "../../Dummyapi";
import Online from "../Online/Online";

function Rightbar({ profile }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const Homerightbar = () => {
    return (
      <>
        <div className="birthdaycontainer">
          <img src="./assets/gift.jpg" alt="" className="birthdayimg" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends </b> have a birthday today
          </span>
        </div>
        <img src="./assets/add1.jpg" className="rightbarAd" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="FriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const Profilerightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Uttrakhand</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoKey">Dehradun</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoKey">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Followers</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={`${PF}profile/pic3.jpg`}
              alt=""
              className="Followingimg"
            />
            <span className="FollowingName">Bella smith</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}profile/pic5.jpg`}
              alt=""
              className="Followingimg"
            />
            <span className="FollowingName">Edward wilson</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}profile/pic4.jpg`}
              alt=""
              className="Followingimg"
            />
            <span className="FollowingName">james watt</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}profile/pic1.jpg`}
              alt=""
              className="Followingimg"
            />
            <span className="FollowingName">Juliana walker</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}profile/pic2.jpg`}
              alt=""
              className="Followingimg"
            />
            <span className="FollowingName">Nati nohara</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={`${PF}profile/pic11.jpg`}
              alt=""
              className="Followingimg"
            />
            <span className="FollowingName">Charlie puth</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightWrapper">
        {profile ? <Profilerightbar /> : <Homerightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
