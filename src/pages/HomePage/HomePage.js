import { Component } from "react";
import { MediaCard } from "@shopify/polaris";
import HeroStars from "../../assets/images/hero-image.jpg";
// import {userHistory} from react-router-dom;
import "./HomePage.scss";

///Testing Polaris
// import "@shopify/polaris/build/esm/styles.css";

export default class HomePage extends Component {
  handleClick(event) {
    event.preventDefault();
    console.log("stars have been clicked!");
  }
  render() {
    return (
      <MediaCard
        title="REACH FOR THE STARS!"
        primaryAction={{
          content: "FIND YOUR STAR",
          //onAction should take user to StarPage
          onClick: this.handleClick,
        }}
        description="Discover how Shopify can power up your entrepreneurial journey."
        popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
        size="small"
      >
        <img
          className="Polaris-MediaCard__hero-image"
          alt="Stars"
          src={HeroStars}
        />
      </MediaCard>
    );
  }
}
