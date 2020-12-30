import React from "react";
import { Link } from "react-router-dom";

const BookDetails = (props) => {
  return (
    <div>
      <div className="row">
        <div className="col s8 offset-s2">
          <div className="card image">
            <img
              className="responsive-img"
              src={props.location.image}
              alt=""
              style={{
                width: "50%",
                padding: 10,
                marginLeft: "25%",
                //marginBottom: "4%",
              }}
            />
            {/* <div className="divider"></div> */}
            <div>
              <span
                className="flow-text"
                style={{
                  display: "inline-block",
                  fontSize: 36,
                  padding: 20,
                }}
              >
                {props.location.title}
              </span>
            </div>
            <div>
              <span
                className="flow-text"
                style={{
                  display: "inline-block",
                  //verticalAlign: "top",
                  margin: 20,
                }}
              >
                Author: {props.location.author}
              </span>
            </div>
            <div>
              <span
                className="flow-text"
                style={{
                  margin: 20,
                }}
              >
                Published in: {props.location.published}
              </span>
            </div>

            <div className="card-content">
              <p>{props.location.description}</p>
            </div>
            <div className="card-action">
              <Link to={{ pathname: "/", books: props.location.props }}>
                Go back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
