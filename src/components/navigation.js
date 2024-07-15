import { Link } from "react-router-dom";
import Timer from "./timer";
const Navigation = () => {
  return (
    <nav>
      <Timer />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/resources">Reserve</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
