import React from "react";
import Booking from "./components/booking/Booking";
import Seating from "./components/seating/Seating";

import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Route exact={true} path="/booking" component={Booking} />
      <Route path="/booking/booking-list" component={Seating} />
    </BrowserRouter>
  );
}

export default App;
