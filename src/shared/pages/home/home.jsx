import React from "react";
import Content from "../../components/Content.jsx";
import Navigation from "../../components/Navigation.jsx";
import Hero from "../../components/Hero.jsx";
import hero1 from '../../components/img/hero1.jpg';

function Home(){
  return (
      <div>
          <Navigation />
          <Hero img={hero1}/>
          <div className="container">
            <div className="row">
                <Content />
                <Content />
            </div>
          </div>
      </div>
    
    );
}

export default Home;