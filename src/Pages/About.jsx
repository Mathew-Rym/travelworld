import React from "react";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../Shared/Subtitle";
import '../styles/About.css';
import worldImg from "../assets/images/world.png"
import logo1 from "../assets/images/logo1.png"
import Newsletter from "../Shared/Newsletter";
import Contact from "./Contact";

const About = () => {
  return (
    <><section className="about">
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"About Us"} />
                <img src={worldImg} alt="" />
              </div>
              <h1>
                Discover the Magic of Africa with{" "}
                <span className="highlight">Travel World Kenya</span>
              </h1>
              <p>
                Based in the heart of Nairobi, Travel World Kenya is your premier gateway to East Africa's most breathtaking destinations. 
                From the sweeping savannas of the Maasai Mara to the pristine beaches of Diani, we specialize in crafting unforgettable 
                Kenyan adventures that showcase the very best of our beautiful country.
              </p>
              <p>
                Our team of local experts brings years of experience in creating personalized travel experiences that go beyond the 
                ordinary. Whether you're seeking a luxury safari, a cultural immersion, or an adrenaline-fueled adventure, 
                we're dedicated to making your African dream a reality.
              </p>
            </div>
          </Col>
          <div className="about__image d-flex align-items-center">
            <img src={logo1} height={250} width={250} alt="" />
          </div>
        </Row>
      </Container>
    </section>
    <Contact/>
    <Newsletter /></>
  );
};

export default About;
