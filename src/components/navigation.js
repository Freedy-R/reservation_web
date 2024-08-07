import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
const Navigation = () => {
  return (
    <header>
      <nav>
        <figure className="logo_section">
          <img className="logo" src={logo} alt="" />
        </figure>
        <ul className="navlinks">
          <Link to="/reservation_web">
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#000000">
              <path d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z" />
            </svg>
            <span>Homepage</span>
          </Link>
          <Link to="/resources">
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#000000">
              <path d="M80-200v-250q0-25.67 10.33-47.67 10.34-22 29.67-37v-114.66Q120-696 152-728t78.67-32H404q22.33 0 41.67 9.5Q465-741 480-724.67q15-16.33 34-25.83t41.33-9.5h173.34q46.66 0 79 32Q840-696 840-649.33v114.66q19.33 15 29.67 37Q880-475.67 880-450v250h-66.67v-80H146.67v80H80Zm433.33-356.67h260v-92.66q0-19-12.83-31.5t-31.83-12.5H553.33q-17 0-28.5 13.16-11.5 13.17-11.5 30.84v92.66Zm-326.66 0h260v-92.66q0-17.67-11.5-30.84-11.5-13.16-28.5-13.16h-176q-18.34 0-31.17 12.83-12.83 12.83-12.83 31.17v92.66Zm-40 210h666.66V-450q0-17-11.5-28.5t-28.5-11.5H186.67q-17 0-28.5 11.5t-11.5 28.5v103.33Zm666.66 0H146.67h666.66Z" />
            </svg>
            <span>Rooms</span>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;
