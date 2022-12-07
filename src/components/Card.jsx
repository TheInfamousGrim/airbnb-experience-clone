import React from "react"
import starPng from '../assets/star.png';

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card({ coverImg, stats, country, title, price, openSpots, location }) {
    let badgeText;
    if (openSpots === 0) {
      badgeText = 'sold out'
    } else if (location === 'Online') {
      badgeText = 'Online'
    } 

    return (
        <div className="card">
          {badgeText && <div className="card__experience-status">{badgeText}</div>}
          <div className="card__img-container">
            <img src={coverImg} alt="Course picture" />
          </div>
          <div className="card__experience-info">
            <div className="card__experience-rating">
              <img className="card__star-img" src={starPng} alt="a red star" />
              <p className="card__rating-txt">{stats.rating} <span className="card__rating-text--grey-font grey">{`(${stats.reviewCount})`} • {country}</span></p>
            </div>
            <p className="card__experience-description">{title}</p>
            <p className="card__experience-price"><span className="card__experience-price--bold font-weight-600">From ${price}</span> / person</p>
          </div>
        </div>
    )
}