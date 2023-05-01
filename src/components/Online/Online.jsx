import "./Online.css";

function Online({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <li className="list">
        <div className="rightbarimgcontainer">
          <img src={PF + user.profilepicture} className="profileimg" alt="" />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarusername">{user.username}</span>
      </li>
    </>
  );
}

export default Online;
