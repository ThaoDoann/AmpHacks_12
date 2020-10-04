import React from "react";
// import styled from "styled-components";
import "./style.css";

function Hero(props){
    return (
        <div>    
            <div className="hero-container">
                <img className="hero-img" src={props.img} alt='hero 1' />
                <div className="text-container">
                    <h1 className="hero-text">{props.text}</h1>
                        {/* video component inside the hero */}
                </div>
            </div>
        </div>
    );
}
export default Hero;