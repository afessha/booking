import React, { useEffect } from "react";
import { connect } from "react-redux";
import Footer from "../footer/Footer";
import { loadBookings } from "../../redux/actions";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

import "./Home.css";
function Home({ bookings, initaliseBookings }) {
  useEffect(() => {
    initaliseBookings();
  }, [initaliseBookings]);
  return (
    <div>
      <h3> WELCOME TO OUR RESTAURANT</h3>
      <h5> We have {bookings.length} bookings today.</h5>
      <div className="wrapper">
        <Card style={{ width: "22rem" }}>
          <Card.Img
            variant="top"
            src="https://gobackpacking.com/wp-content/uploads/2011/07/Ethiopian-food.jpg"
          />
          <Card.Body>
            <Card.Title>Food</Card.Title>
            <Card.Text>
              Eritrean cuisine is tsebhi (stew), served with injera (flatbread
              made from teff, wheat, or sorghum and hilbet (paste made from
              legumes; mainly lentil and faba beans). A typical traditional
              Eritrean dish consists of injera accompanied by a spicy stew,
              which frequently includes beef, goat, lamb.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Tebsi</ListGroupItem>
            <ListGroupItem>Tsebhi derho</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="https://en.wikipedia.org/wiki/Eritrean_cuisine">
              Tebsi
            </Card.Link>
            <Card.Link href="https://en.wikipedia.org/wiki/Wat_(food)">
              Tsebhi derho
            </Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "22rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn2.vox-cdn.com/thumbor/RUoaNnhjLyBi3iyt8h5Lv8EghmU=/1200x0/filters:no_upscale()/cdn2.vox-cdn.com/uploads/chorus_asset/file/7524145/untitled-9871.0.jpeg"
          />
          <Card.Body>
            <Card.Title>Drinks</Card.Title>
            <Card.Text>
              Myes is a honey wine that is brewed and consumed in Ethiopia and
              Eritrea. It is flavoured with the powdered leaves and twigs of
              gesho (Rhamnus prinoides), a hops-like bittering agent that is a
              species of buckthorn.It is often served in a flask-like pitcher or
              bottle, called a bereles.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Suwa</ListGroupItem>
            <ListGroupItem>Miyes</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="https://en.wikipedia.org/wiki/Eritrean_cuisine#:~:text=bar%20in%20Eritrea-,Beverages,Mies)%20is%20also%20commonly%20served.">
              Suwa
            </Card.Link>
            <Card.Link href="https://en.wikipedia.org/wiki/Tej#:~:text=Tej%20(from%20Amharic%20%E1%8C%A0%E1%8C%80%2C%20pronounced,Tigrinya%2C%20and%20daadhi%20in%20Oromo.">
              Miyes
            </Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "22rem" }}>
          <Card.Img
            variant="top"
            src="https://africanpalacetoronto.files.wordpress.com/2013/11/coffee-dsc_3514.jpg"
          />
          <Card.Body>
            <Card.Title>Coffee</Card.Title>
            <Card.Text>
              A coffee ceremony is a ritualized form of making and drinking
              coffee.There is a routine of serving coffee on a daily basis,
              mainly for the purpose of getting together with relatives,
              neighbors, or other visitors. If coffee is politely declined, then
              tea (Chai) will most likely be served.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Shahi</ListGroupItem>
            <ListGroupItem>Tsimuak</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="http://eritreanfoodanddrinks.blogspot.com/p/suwa-and-mes.html">
              Shahi
            </Card.Link>
            <Card.Link href="https://en.wikipedia.org/wiki/Culture_of_Eritrea">
              Tsimuak
            </Card.Link>
          </Card.Body>
        </Card>
      </div>

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
    initaliseBookings: () => dispatch(loadBookings()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
