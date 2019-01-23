import React, { Component} from "react";
import { Col, Row, Container, Col2, BookList, BookListItem } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import {Input, FormBtn} from "../components/Form";
import API from "../utils/API";


class Search extends Component {
state = {
  books: [],
  title: "",
  results: []
};

componentDidMount(){
  API.getBooks()
  .then(res=> {
    console.log(res.data.items)
    this.setState({ book: res.data.items })
  })
  .catch(err=> console.log(err));
}

handleInputChange = (event) => {
  const { name, value} = event.target;
  this.setState({ [name]: value})
};

handleFormSubmit = (event) => {
  event.preventDefault();
  API.getBooks(this.state.title)
  .then(res => {
    console.log(res.data.items)
    this.setState({ books: res.data.items })
  })
  .catch(err => console.log(err));
};

render() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
        <Jumbotron/>
          <Col2>
          <form>
          <p>Book Search</p>
          <p>Book</p>
          <Input
              placeholder="Title (required)"
              onChange={this.handleInputChange}
              name="title"
              value={this.state.title}
              />
          </form>
          <FormBtn onClick={this.handleFormSubmit}>Submit</FormBtn>
          </Col2>
          <br></br>
          <Col2>
          <p>Results</p>
                <BookList>
                  {this.state.books.map((book, id) => (
                      <BookListItem
                        key={book.volumeInfo.title}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        selfLink={book.volumeInfo.infoLink}
                        thumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                        description={book.volumeInfo.description}
                      />
                  ))}
                </BookList>
          </Col2>
        </Col>
      </Row>
    </Container>
  );
}
}

export default Search;