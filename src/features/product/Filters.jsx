import React from "react";
// import "../../App.css";
import "./Counter.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../cart/cartp.css";

export default function Filters() {
  return (
    <div className="filter">
      <span className="title">Filter Products</span>
      <Form>
        <div key={`default-1`} className="mb-3">
          <span className="span">
            <Form.Check
              type="radio"
              name="group-1"
              id={`default-1`}
              label={`Ascending`}
            />
          </span>
          <span className="span">
            <Form.Check
              type="radio"
              name="group-1"
              id={`default-2`}
              label={`Descending`}
            />
          </span>
          <span className="span">
            <Form.Check
              type="checkbox"
              id={`default31`}
              label={`Include out of Stock`}
            />
          </span>
          <span className="span">
            <Form.Check
              type="checkbox"
              id={`default-4`}
              label={`Fast Delivery Only`}
            />
          </span>
          <span className="span">
            <label style={{ paddingRight: 10 }}>Rating :</label>
            {/* <Rating
              rating={rate}
              onClick={(i) => setRate(i + 1)}
              style={{ cursor: "pointer" }}
            /> */}
          </span>
        </div>
      </Form>
      <Button variant="light">Clear Filters</Button>
    </div>
  );
}
