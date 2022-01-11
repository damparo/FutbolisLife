import React from "react";
import "../styles/Collection.css";
import { Card } from "react-bootstrap";

function Collection(props) {
  const movieInfo = [];
  console.log(movieInfo);

  const cardA =
    <Card onClick={props.saveClick()} style={{ width: "12rem"}}>
      <Card.Img
        variant="top"
        alt={props.title}
        className="img-fluid"
        src={props.poster}
        style={{ margin: "0 auto" }}
      />
    </Card>
  

  return (
    <div className="collectionhere text-white">
      <h2>Your Collection</h2>
    
      <ul>

        {cardA}
        {/* {movieInfo.map((movie) => (
          <li>{movie}</li>
        ))} */}
      </ul>

      {/* <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          alt={props.title}
          className="img-fluid"
          src={props.poster}
          style={{ margin: "0 auto" }}
        />
      </Card>
        <h3 className="text-white">{props.title}</h3> */}
    </div>
  );
}

export default Collection;
