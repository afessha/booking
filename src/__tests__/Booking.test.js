import React from "react";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
import data from "../data/data.json";
import { Link, BrowserRouter } from "react-router-dom";
import Footer from "../components/footer/Footer";
class Booking extends React.Component {
  constructor() {
    super();
    this.state = {
      bookings: data,
      firstname: "",
      lastname: "",
      diningDate: "",
      numberOfCovers: "",
      email: "",
      phoneNumber: "",
      message: "",
      errors: [],
    };
  }
  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  validate = (lastname, email, phoneNumber) => {
    const errors = [];

    if (lastname.length === 0) {
      errors.push("Name can't be empty");
    }
    if (email.length < 5) {
      errors.push("Email should be at least 5 charcters long");
    }
    if (email.split("").filter((x) => x === "@").length !== 1) {
      errors.push("Email should contain a @");
    }
    if (email.indexOf(".") === -1) {
      errors.push("Email should contain at least one dot");
    }
    if (phoneNumber.length < 10) {
      errors.push("Phone number should be at least 10 numbers long");
    }
    return errors;
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      diningDate,
      numberOfCovers,
      email,
      phoneNumber,
    } = this.state;
    const errors = this.validate(lastname, email, phoneNumber);
    if (errors.length > 0) {
      this.setState({ errors: errors, message: "" });
      return;
    }
    let newBooking = {
      firstname: firstname,
      lastname: lastname,
      diningDate: diningDate,
      numberOfCovers: numberOfCovers,
      email: email,
      phoneNumber: phoneNumber,
    };

    let currentBooking = this.state.bookings;
    currentBooking.push(newBooking);

    this.formRef.reset();
    this.setState({
      message: "Thank you for booking.",
      errors: [],
    });

    localStorage.setItem("bookings", JSON.stringify(currentBooking));
  };

  render() {
    localStorage.setItem("bookings", JSON.stringify(this.state.bookings));
    const { errors } = this.state;
    return (
      <BrowserRouter>
        <div>
          <div className="container">
            <form className="form-signin" ref={(ref) => (this.formRef = ref)}>
              <h2 className="form-signin-heading">Booking</h2>
              <Link to={"/booking-list"}> Go to Bookings List</Link>

              {errors.map((error) => (
                <p key={error} className="error">
                  Error: {error}
                </p>
              ))}

              <p className="submitted"> {this.state.message}</p>

              <br />
              <label>First Name</label>
              <input
                className="form-control"
                name="firstname"
                required
                onChange={this.onChange}
              />
              <label>Last Name</label>
              <input
                className="form-control"
                name="lastname"
                onChange={this.onChange}
                required
              />
              <label> Dining Date</label>
              <input
                className="form-control"
                name="diningDate"
                required
                onChange={this.onChange}
              />
              <label>Number of Covers </label>
              <input
                className="form-control"
                name="numberOfCovers"
                required
                onChange={this.onChange}
              />
              <label> Email </label>
              <input
                className="form-control"
                name="email"
                required
                onChange={this.onChange}
              />
              <label>Phone Number</label>
              <input
                className="form-control"
                required
                name="phoneNumber"
                onChange={this.onChange}
              />
              <button
                className="btn btn-lg btn-success btn-block"
                type="submit"
                onClick={this.onSubmit}
              >
                Book Table
              </button>
            </form>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default Booking;

describe("Booking component", () => {
  test("Matches the snapshot", () => {
    const booking = create(<Booking />);
    expect(booking.toJSON()).toMatchSnapshot();
  });
});
