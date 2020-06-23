import React from "react";
import { render } from "@testing-library/react";
import { create } from "react-test-renderer";
import data from "../data/data.json";
import { Link, BrowserRouter } from "react-router-dom";
import Footer from "../components/footer/Footer";
class Seating extends React.Component {
  constructor() {
    super();
    this.state = {
      bookings: data,
      // filteredBookings: data,
      // searchValue: "",
    };
  }

  //   onChange = (e) => {
  //     const state = this.state;
  //     state[e.target.name] = e.target.value;
  //     this.setState(state);
  //     const { searchValue } = this.state;
  //     const filteredOutput = this.state.bookings.filter((result) => {
  //       return (
  //         result.firstname === searchValue || result.lastname === searchValue
  //       );
  //     });
  //     this.setState({ filteredBookings: filteredOutput });
  //   };

  render() {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    return (
      <BrowserRouter>
        <div>
          <h3 className="seating-title">Booking List </h3>
          {/* <input
          classname="search-input"
          placeholder="search by name"
          onChange={this.onChange}
        /> */}
          <div className="link-to-booking">
            <Link to={"/"}>Go to Booking page</Link>
          </div>
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
            {users.map((result) => (
              <tbody>
                <tr>
                  <td>{result.firstname} </td>

                  <td>{result.lastname} </td>

                  <td>{result.diningDate} </td>

                  <td>{result.numberOfCovers} </td>

                  <td>{result.phoneNumber}</td>

                  <td>{result.email}</td>
                  <td>
                    {" "}
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
      </BrowserRouter>
    );
  }
}

export default Seating;

describe("Seating component", () => {
  test("Matches the snapshot", () => {
    const seating = create(<Seating />);
    expect(seating.toJSON()).toMatchSnapshot();
  });
});
