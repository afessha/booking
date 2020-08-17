import React from "react";
import "./Seating.css";
import { connect } from "react-redux";
import Footer from "../footer/Footer";
import { markSeated, loadBookings } from "../../redux/actions";

function Seating({ bookings, markSeated, initaliseBookings }) {
  return (
    <div>
      <h3 className="seating-title">Booking List </h3>
      <div className="link-to-booking"></div>
      <br />
      <br />

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID </th>
            <th scope="col">First Name </th>
            <th scope="col">Last Name </th>
            <th scope="col">Dining Date</th>
            <th scope="col">Number of Covers </th>
            <th scope="col">Phone Number</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        {bookings.map((booking) => (
          <tbody key={booking.booking_id}>
            <tr>
              <td>{booking.booking_id} </td>

              <td>{booking.firstname} </td>

              <td>{booking.lastname} </td>

              <td>{booking.dining_date} </td>

              <td>{booking.number_of_covers} </td>

              <td>{booking.phone_number}</td>

              <td>{booking.booking_email}</td>
              <td>{booking.status}</td>
              <td>
                <button onClick={() => markSeated(booking.id, "Seated")}>
                  Mark Seated
                </button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    markSeated: (bookingId, value) => dispatch(markSeated(bookingId, value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Seating);
