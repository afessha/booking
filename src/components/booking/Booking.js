import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import "./Booking.css";
import Footer from "../footer/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { bookingAdd } from "../../redux/actions";

function Booking(props) {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      dining_date: "",
      number_of_covers: "",
      booking_email: "",
      phone_number: "",
      status: "Not arrived",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastname: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      booking_email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    }),
    onSubmit: async (booking) => {
      try {
        let res = await axios.post(
          "https://a6qroxzfnb.execute-api.eu-west-2.amazonaws.com/dev/bookings",
          JSON.stringify(booking)
        );
        console.log(res.status);
        if (res.status === 200) {
          props.addNew({ booking });
          formik.resetForm();
        }
      } catch (err) {
        console.log("Error happened" + err);
      }
    },
  });

  return (
    <>
      <div>
        <div className="container">
          <form className="form-signin" onSubmit={formik.handleSubmit}>
            <h2 className="form-signin-heading">Booking</h2>
            <br />
            <label>First Name</label>
            <input
              className="form-control"
              name="firstname"
              {...formik.getFieldProps("firstname")}
            />
            {formik.touched.firstname && formik.errors.firstname ? (
              <div className="error">{formik.errors.firstname}</div>
            ) : null}
            <label>Last Name</label>
            <input
              className="form-control"
              name="lastname"
              {...formik.getFieldProps("lastname")}
            />
            {formik.touched.lastname && formik.errors.lastname ? (
              <div className="error">{formik.errors.lastname}</div>
            ) : null}
            <label> Dining Date</label>
            <input
              className="form-control"
              name="dining_date"
              {...formik.getFieldProps("dining_date")}
            />
            <label>Number of Covers </label>
            <input
              className="form-control"
              name="number_of_covers"
              {...formik.getFieldProps("number_of_covers")}
            />

            <label> Email </label>
            <input
              className="form-control"
              name="booking_email"
              {...formik.getFieldProps("booking_email")}
            />
            {formik.touched.booking_email && formik.errors.booking_email ? (
              <div className="error">{formik.errors.booking_email}</div>
            ) : null}
            <label>Phone Number</label>
            <input
              className="form-control"
              name="phone_number"
              {...formik.getFieldProps("phone_number")}
            />
            <button className="btn btn-lg btn-success btn-block" type="submit">
              Book Table
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNew: (booking) => dispatch(bookingAdd(booking)),
  };
};
export default connect(null, mapDispatchToProps)(Booking);
