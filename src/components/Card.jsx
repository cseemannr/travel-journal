import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const localIcon = (
  <FontAwesomeIcon icon={faLocationDot} className="localIcon" />
);

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.item.imageUrl} />
      <div className="card--info">
        <p className="card--info--geo">
          {localIcon}
          <span className="card--info--geo--location">
            {props.item.location}
          </span>
          <a href={props.item.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </p>
        <h2>{props.item.title}</h2>
        <p className="card--info--date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}
