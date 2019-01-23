import React from "react";
import "./style.css";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")} 
    >
      {children}
    </div>
  );
}

function Thumbnail({ src }) {
  return (
    <div
      className="thumbnail"
      role="img"
      aria-label="Recipe Image"
      style={{
        backgroundImage: `url(${src})`
      }}
    />
  );
}

export function Col2({children}) {
  return(
    <div className="searchBook">
    {children}
    </div>
  );
}

export function BookList({children}) {
  return <ul>{children}</ul>;
}

export function BookListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  authors,
  selfLink,
  description,
}) {
  return (
    <li>
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
          </Col>
          <Thumbnail src={thumbnail}/>
          <Col size="xs-12 sm-12">
          <h3>{title}</h3>
          <h4>{authors}</h4>
          <p>Description: {description}</p>
          <a rel="noreferrer noopener" target="_blank" href={selfLink}>
              Go to Book!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
