import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import home_icon from "../Assets/Addons/home.png";
const Navigation = () => {
  return (
    <header>
      <nav>
        <ul className="navlinks">
          <li>
            <Link to="/">
              <img src={home_icon} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/resources">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#e8eaed"
              >
                <path d="M240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm0-80h480v-640h-80v280l-100-60-100 60v-280H240v640Zm0 0v-640 640Zm200-360 100-60 100 60-100-60-100 60Z" />
              </svg>
            </Link>
          </li>
        </ul>
        <img className="logo" src={logo} alt="" />
      </nav>
    </header>
  );
};
export default Navigation;
