import { Component } from "react";
import { MediaCard } from "@shopify/polaris";
import HeroStars from "../../assets/images/hero-image.jpg";
import "./HomePage.scss";

///Testing Polaris

export default class HomePage extends Component {
  handleClick = (event) => {
    event.preventDefault();
    console.log("to the stars!");
    this.props.history.push("/stars");
  };
  render() {
    return (
      <MediaCard
        title="REACH FOR THE STARS!"
        primaryAction={{
          content: "FIND YOUR STAR",
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
