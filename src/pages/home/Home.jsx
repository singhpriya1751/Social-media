import "./Home.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feedbar from "../../components/feed/Feedbar";
import Rightbar from "../../components/rightbar/Rightbar";

function Home() {
  return (
    <>
      <Topbar />
      <div className="homecontainer">
        <Sidebar />
        <Feedbar />
        <Rightbar />
      </div>
    </>
  );
}
export default Home;
