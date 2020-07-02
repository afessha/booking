import React from "react";
import { connect } from "react-redux";
import "./Booking.css";
import Footer from "../footer/Footer";
import useFormValidation from "./useFormValidation";
import validateAuth from "./validateAuth";
import { bookingAdd } from "../../redux/actions";

const INITIAL_STATE = {
  firstname: "",
  lastname: "",
  diningDate: "",
  numberOfCovers: "",
  email: "",
  phoneNumber: "",
};

function Booking(props) {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    myNewBooking,
  } = useFormValidation(INITIAL_STATE, validateAuth);
  return (
    <>
      <div>
        <div className="container">
          <form className="form-signin">
            <h2 className="form-signin-heading">Booking</h2>

            <br />
            <label>First Name</label>
            <input
              className="form-control"
              name="firstname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstname}
            />
            {errors.firstname && (
              <p className="error-text">{errors.firstname}</p>
            )}
            <label>Last Name</label>
            <input
              className="form-control"
              name="lastname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastname}
            />
            {errors.lastname && <p className="error-text">{errors.lastname}</p>}
            <label> Dining Date</label>
            <input
              className="form-control"
              name="diningDate"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.diningDate}
            />
            <label>Number of Covers </label>
            <input
              className="form-control"
              name="numberOfCovers"
              required
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.numberOfCovers}
            />
            <label> Email </label>
            <input
              className="form-control"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && <p className="error-text">{errors.email}</p>}

            <label>Phone Number</label>
            <input
              className="form-control"
              required
              name="phoneNumber"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
            />
            {errors.phoneNumber && (
              <p className="error-text">{errors.phoneNumber}</p>
            )}
            <button
              className="btn btn-lg btn-success btn-block"
              type="submit"
              onClick={handleSubmit && props.onClick(myNewBooking)}
            >
              Book Table
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    bookings: state.bookings,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (booking) => dispatch(bookingAdd(booking)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Booking);
