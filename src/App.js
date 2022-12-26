import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Aboutus from "./component/Aboutus";

import "./styles/header.css";
import "./styles/post.css";
import "./styles/home.css";
import "./styles/aboutus.css";
import "./styles/app.css";
import "./styles/footer.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<Aboutus />} />
      </Routes>

    </Router>
  );
}

export default App;
