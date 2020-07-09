import React from "react";
import { connect } from "react-redux";
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
      diningDate: "",
      numberOfCovers: "",
      email: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastname: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (booking) => {
      props.addNew({
        ...booking,
        id: Date.now(),
        status: "Not arrived",
      });
      formik.resetForm();
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
              name="diningDate"
              {...formik.getFieldProps("diningDate")}
            />
            <label>Number of Covers </label>
            <input
              className="form-control"
              name="numberOfCovers"
              {...formik.getFieldProps("numberOfCovers")}
            />

            <label> Email </label>
            <input
              className="form-control"
              name="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
            <label>Phone Number</label>
            <input
              className="form-control"
              name="phoneNumber"
              {...formik.getFieldProps("phoneNumber")}
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
