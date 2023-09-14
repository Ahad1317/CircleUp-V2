import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import AirplayOutlinedIcon from "@mui/icons-material/AirplayOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import { Link } from "react-router-dom";
 
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>CircleUP</span>
        </Link>
        <HomeOutlinedIcon />
        <NightsStayOutlinedIcon />
        <AirplayOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon/>
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon/>
        <MailOutlineOutlinedIcon/>
        <NotificationsActiveOutlinedIcon/>
        <div className="user">
          <img src="https://media.licdn.com/dms/image/D5603AQHgzl2zw3fw8w/profile-displayphoto-shrink_800_800/0/1694108787694?e=1700092800&v=beta&t=EJyPDyZFF0ztzhK4PB2UdACqkWv1Uz6vOabJtMkgQHA" alt="" />
          <span>Abdul Ahad</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
