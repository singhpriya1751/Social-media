import "./Closefriend.css";

function Closefriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <li className="sidebarFriend">
        <img src={PF + user.profilepicture} alt="" className="sidebarimg" />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </>
  );
}

export default Closefriend;
