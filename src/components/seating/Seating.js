import React from "react";
import "./Seating.css";
import { connect } from "react-redux";
import Footer from "../footer/Footer";
import { bookingLoad } from "../../redux/actions";
function Seating({ bookings }) {
  console.log(bookings);
  return (
    <div>
      <h3 className="seating-title">Booking List </h3>
      <div className="link-to-booking"></div>
      <br />
      <br />

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">First Name </th>
            <th scope="col">Last Name </th>
            <th scope="col">Dining Date</th>
            <th scope="col">Number of Covers </th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        {bookings.map((result) => (
          <tbody>
            <tr>
              <td>{result.firstname} </td>

              <td>{result.lastname} </td>

              <td>{result.diningDate} </td>

              <td>{result.numberOfCovers} </td>

              <td>{result.phoneNumber}</td>

              <td>{result.email}</td>
              <td>
                <select>
                  <option value="notArrived">Not arrived</option>
                  <option value="seated">Seated</option>
                </select>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    bookings: state.bookings,
  };
};

export default connect(mapStateToProps)(Seating);
