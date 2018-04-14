import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

// const Background ={
//     height: "calc(100vh - 100px)",
//     width: "100%",
//     margin: "auto"
//   };

//   const Background ={
//     backgroundImage: "url('/images/bg1.png')",
//     // Function in Css calculating the correct height of the image
//     height: "calc(100vh - 108px)",
//     // backgroundRepeat: "noRepeat"
//     width: "100%",
//     backgroundSize: "cover"
//   };

class Reviews extends Component {
  state = {
    reviews: [],
    name: "",
    stars: "",
    comments: ""
  };

  componentDidMount() {
    this.loadReviews();
  }

  loadReviews = () => {
    API.getReviews()
      .then(res => {
        console.log(res.data);
        this.setState({ name: "", stars: "", comments: "", reviews: res.data })
      })
      .catch(err => console.log(err));
  };

  deleteReview = id => {
    API.deleteReview(id)
      .then(res => this.loadReviews())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.stars && this.state.comments) {
      API.saveReview({
        name: this.state.name,
        stars: this.state.stars,
        comments: this.state.comments
      })
        .then(res => this.loadReviews())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron style={{height: "100px"}}>
              <h1>Leave Us a Review</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="name(required)"
              />
              <Input
                value={this.state.stars}
                onChange={this.handleInputChange}
                name="stars"
                placeholder="stars (required)"
              />
              <TextArea
                value={this.state.comments}
                onChange={this.handleInputChange}
                name="comments"
                placeholder="comments (Required)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.stars && this.state.comments)}
                onClick={this.handleFormSubmit}
              >
                Submit Review
              </FormBtn>
            </form>
          </Col>
          <Col size="md-12">
            <Jumbotron>
              <h1>Reviews</h1>
            </Jumbotron>
            {this.state.reviews.length ? (
              <List>
                {this.state.reviews.map(review => (
                  <ListItem key={review._id}>
                    <Link to={"/reviews/" + review._id}>
                      <strong>
                          {/* need to italicize this quote */}
                       "{review.comments}" -  {review.name} - {review.stars} ⭐'s
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteReview(review._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Reviews;
