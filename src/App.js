import React from "react";
import Booking from "./components/booking/Booking";
import Seating from "./components/seating/Seating";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="header-link">
          <Link className="link-element" to="/">
            Booking
          </Link>
          <Link className="link-element" to="/booking-list">
            Seating
          </Link>
        </header>
        <Route exact={true} path="/" component={Booking} />
        <Route path="/booking-list" component={Seating} />
      </div>
    </BrowserRouter>
  );
}

export default App;
