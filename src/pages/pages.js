import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import Resources from "./resources";
import Navigation from "../components/navigation";
const Pages = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/reservation_web" element={<Home />} />
        <Route path="/resources" element={<Resources />}></Route>
      </Routes>
    </Router>
  );
};
export default Pages;
