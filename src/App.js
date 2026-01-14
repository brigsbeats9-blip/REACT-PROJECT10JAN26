import Home from "./Pages/Home";
import "./index.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "./Pages/Books";

//import { library } from "@fortawesome/fontawesome-svg-core";
//import { faBars } from "@fortawesome/free-solid-svg-icons";

//library.add(faBars);

//import Footer from "./components/Footer/Footer";
//import { BrowerRouter as Router, Route, Routes } from "react-router-dom";
//import Home from "./pages/Home/Home";
//import Books from "./pages/Books/Books";
//import { books } from "./data/books";
//import BookInfo from "./pages/BookInfo/BookInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" component={Books} />
       <Footer />
      </div>
    </Router>
  );
}

export default App;
