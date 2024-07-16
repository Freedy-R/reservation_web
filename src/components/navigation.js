import { Link } from "react-router-dom";
import Timer from "./timer";
import logo from "../img/logo.png";
const Navigation = () => {
  return (
    <nav>
      <Timer />
      <img className="logo" src={logo} />
      <ul className="navlinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <button className="btnReserve">
            <Link to="/resources">Reserve</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
