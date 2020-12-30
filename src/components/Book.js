import React from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
  //console.log(props);
  return (
    <div className="col s12 m3">
      <div className="card large">
        <div
          className="card-image"
          style={{
            padding: 7,
            marginBottom: 7,
          }}
        >
          {props.book.volumeInfo.imageLinks === undefined ? (
            <img
              src={"https://picsum.photos/200/300"}
              //style={{ width: "70", height: "70" }}
              alt=""
            />
          ) : (
            <img
              src={props.book.volumeInfo.imageLinks.thumbnail}
              //style={{ alignSelf: "center" }}
              alt={"Book Title"}
            />
          )}
        </div>
        <div>
          <div className="divider"></div>
          <span
            className="card-title"
            style={{
              color: "black",
              fontSize: 18,
              position: "absolute",
              marginTop: 10,
              marginLeft: 15,
              marginRight: 15,
            }}
          >
            {props.book.volumeInfo.title}
          </span>
        </div>
        <div
          className="card-content"
          style={{
            marginTop: 50,
            marginLeft: -6,
          }}
        >
          <p>{props.book.volumeInfo.authors}</p>
          <p>{props.book.volumeInfo.publishedDate}</p>
        </div>
        <div className="card-action">
          <Link
            to={{
              pathname: "/book/" + props.title,
              title: props.title,
              author: props.author,
              published: props.published,
              image: props.image,
              description: props.description,
              props: props.props,
            }}
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Book;
