import React from "react";
import Room from "../room/Room";
import "./rooms.css";
import room1 from "../../assets/room1.webp";

function Rooms() {
  return (
    <div className="rooms section__padding">
      <div className="rooms__title">
        <h2>Our Rooms</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ipsa
          eum quas aperiam dolorum tenetur.
        </p>
      </div>

      <div className="rooms__container">
        <Room
          image={room1}
          title="Classic Room"
          price="60"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, minima."
        />
        <Room
          image={room1}
          title="Classic Room"
          price="60"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, minima."
        />
        <Room
          image={room1}
          title="Classic Room"
          price="60"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, minima."
        />
      </div>
    </div>
  );
}

export default Rooms;
