import React from 'react'

export default function TravelCard(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.info.imageUrl} alt="" />
      </div>
      <div className="card-info">
        <div className="card-location">
          <i class="fa-solid fa-location-pin"></i>
          <p className="card-country">{props.info.location}</p>
          <a href={props.info.googleMapsUrl} className="card-map">
            View on Google maps
          </a>
        </div>
        <h1 className="card-city"> {props.info.title} </h1>
        <p className="card-date">
          {props.info.startDate} - {props.info.endDate}
        </p>
        <p className="card-about">{props.info.description}</p>
      </div>
    </div>
  )
}
