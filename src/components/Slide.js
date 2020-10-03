import React from "react";
import styled from "styled-components";
import "./Slide.css";

function Slide(props){
    return (
        <div>    
            <div className="hero-container banner-container">
                <img className="hero-img" src={props.img} alt='hero 1' />
                <div className="text-container banner-text-container">
                    <h1 className="hero-text page "></h1>
                        {/* video component inside the hero */}
                </div>
            </div>
        </div>
    );
}
export default Slide;