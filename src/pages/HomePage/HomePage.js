import { Component } from "react";
import { MediaCard } from "@shopify/polaris";
import HeroStars from "../../assets/images/hero-image.jpg";
import "./HomePage.scss";

///Testing Polaris
// import "@shopify/polaris/build/esm/styles.css";

export default class HomePage extends Component {
  render() {
    return (
      <MediaCard
        title="REACH FOR THE STARS!"
        primaryAction={{
          content: "FIND YOUR STAR",
          //onAction should take user to StarPage
          onAction: () => {},
        }}
        description="Discover how Shopify can power up your entrepreneurial journey."
        popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
        size="small"
      >
        <img
          className="Polaris-MediaCard__hero-image"
          alt="Hero-image of stars"
          src={HeroStars}
        />
      </MediaCard>
    );
  }
}
