import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";

export default function Home() {
  return (
    <React.Fragment>
      <Hero>
        <Banner title="Luxurious Rooms" subtitle="Delux Rooms Starting At $299">
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </React.Fragment>
  );
}
