import { Link } from "react-router-dom";
import myImage from "../../assets/ss.jpg";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
      <div className="flex items-center">
        <img
          className="w-14 h-14"
          src={myImage}
          alt="Description of the image"
        />
        <span className="font-bold">Task Master</span>
        <Link to="/">Tasks</Link>
        <Link to="/users">Users</Link>
      </div>
    </nav>
  );
};

export default Navbar;
