import {
  Bookmark,
  Chat,
  Event,
  Group,
  HelpCenterOutlined,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOffOutlined,
} from "@mui/icons-material";
import "./Sidebar.css";
import Closefriend from "../closefriend/Closefriend";
import { Users } from "../../Dummyapi";
function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarlist">
            <li className="sidebarlistItem">
              <RssFeed className="sidebarIcon" />
              <span className="sidebarlistItemText">Feed</span>
            </li>
            <li className="sidebarlistItem">
              <Chat className="sidebarIcon" />
              <span className="sidebarlistItemText">Chats</span>
            </li>
            <li className="sidebarlistItem">
              <PlayCircleFilledOutlined className="sidebarIcon" />
              <span className="sidebarlistItemText">Videos</span>
            </li>
            <li className="sidebarlistItem">
              <Group className="sidebarIcon" />
              <span className="sidebarlistItemText">Groups</span>
            </li>
            <li className="sidebarlistItem">
              <Bookmark className="sidebarIcon" />
              <span className="sidebarlistItemText">Bookmarks</span>
            </li>
            <li className="sidebarlistItem">
              <HelpCenterOutlined className="sidebarIcon" />
              <span className="sidebarlistItemText">Questions</span>
            </li>
            <li className="sidebarlistItem">
              <WorkOffOutlined className="sidebarIcon" />
              <span className="sidebarlistItemText">Jobs</span>
            </li>
            <li className="sidebarlistItem">
              <Event className="sidebarIcon" />
              <span className="sidebarlistItemText">Events</span>
            </li>
            <li className="sidebarlistItem">
              <School className="sidebarIcon" />
              <span className="sidebarlistItemText">Courses</span>
            </li>
          </ul>
          <button className="sidebarButton">Show more</button>
          <hr className="sidebarHr" />
          <ul className="sidebarFriendList">
            {Users.map((u) => (
              <Closefriend key={u.id} user={u} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
