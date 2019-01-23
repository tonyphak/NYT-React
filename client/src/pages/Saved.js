import React, { Component} from "react";
import { Col, Row, Container, Col2, BookList, BookListItem } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import {Input, FormBtn} from "../components/Form";

class Saved extends Component {
    state ={

    };


    render(){
        return(
            <Container fluid>
            <Row>
                <Col size="md-12">
                <Jumbotron/>
                <Col2>
                <p>Saved Books</p>
                </Col2>
                </Col>
            </Row>
            </Container>
        )
    }
}

export default Saved
