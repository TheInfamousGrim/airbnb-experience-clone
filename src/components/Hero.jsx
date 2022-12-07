import React from "react";
import photoGrid from '../assets/photo-grid.png';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__img-section">
                <img className="hero__img" src={photoGrid} alt="A grid of photos where people are doing various activities" />
            </div>
            <div className="hero__txt-container">
                <h1 className="hero__title-txt">Online Experiences</h1>
                <h3 className="hero__txt-body">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
            </div>
        </section>
    )
}

export default Hero;