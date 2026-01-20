import Home from "./Pages/Home";
import "./index.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./Pages/Cart";
import { useState, useEffect } from "react";

import Books from "./Pages/Books";
import { books } from "./data";
import BookInfo from "./Pages/BookInfo";

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
  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, book]);
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);


    /*const dupeItem = cart.find((item) => +item.id === +book.id);
    if (dupeItem) {
      setCart(
        cart.map((item) => {
          if (+item.id === +dupeItem.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } 
          else {
            return item;
          }
        }));
    }
    else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  }

  useEffect(() => {
    console.log(cart);
  }, [cart]);*/

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route
          path="/books/:id"
          render={() => <BookInfo books={books} addToCart={addToCart} />}
        />
        <Route path="/cart" render={() => <Cart books={books} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
