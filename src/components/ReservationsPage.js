import React from "react";
import "./styles/ReservationsContent.css";
import Form from "./Form";

function ReservationsPage() {
  return (
    <div className="res-content-wrapper">
      <div className="res-content-container">
        <div className="text">
          <h2>Experience a cosy atmosphere for your meetup</h2>
          <p>
            At Little Lemon, we want to provide you a place to relax and connect
            with your family, friend or work partners
          </p>
        </div>
        <div className="form">
          <h1>Reserve a Table</h1>
          <p>
            Please fill in and submit the form to reserve your table at Little
            Lemon
          </p>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default ReservationsPage;
