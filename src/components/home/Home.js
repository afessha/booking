import React from "react";
import Footer from "../footer/Footer";
import {
  Jumbotron,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { connect } from "react-redux";
import "./Home.css";
function Home() {
  return (
    <div>
      <h3> WELCOME TO OUR RESTAURANT</h3>
      <div className="wrapper">
        <Card style={{ width: "22rem" }}>
          <Card.Img
            variant="top"
            src="https://gobackpacking.com/wp-content/uploads/2011/07/Ethiopian-food.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "22rem" }}>
          <Card.Img
            variant="top"
            src="https://www.yetlebla.com/wp-content/uploads/30.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "22rem" }}>
          <Card.Img
            variant="top"
            src="https://africanpalacetoronto.files.wordpress.com/2013/11/coffee-dsc_3514.jpg"
          />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>

      <Footer />
    </div>
  );
}

export default connect()(Home);
