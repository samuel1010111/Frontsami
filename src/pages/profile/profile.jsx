import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";

export default function Profile() {
return(
  <>
  <Topbar/>
    <div className="homeContainer">
      <Sidebar/>
      <div className="profileRight">
      <div className="profileRightTop">
        <div className="profileCover"></div>
        
        <img className ="profileCoverImg" src="assets/posts/3.jpg" alt =""/>
        <img className ="profileUser" src="assets/posts/3.jpg" alt =""/>

      </div>
      <div className="profileInfo">
        <h4 className="profileInfoName">safak kocaoglu</h4>
        <span className="profileInfoName">Hello my friend</span>
      </div>
      <div className="profileRightBottom">
        


      </div>
        <Feed/>
        <Rightbar/>
      
    </div>
    </div>
  
  </>
)

}
