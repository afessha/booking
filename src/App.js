import React from "react";
import Booking from "./components/Booking";
import Seating from "./components/Seating";

import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route exact={true} path="/" component={Booking} />
      <Route path="/booking-list" component={Seating} />
    </Router>
  );
}

export default App;
