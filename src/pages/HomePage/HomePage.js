import { Component } from "react";
import { MediaCard } from "@shopify/polaris";
import HeroStars from "../../assets/images/hero-image.jpg";
import "./HomePage.scss";

export default class HomePage extends Component {
  handleClick = (event) => {
    event.preventDefault();
    console.log("to the stars of the day!!");
    this.props.history.push("/stars");
  };
  render() {
    return (
      <>
        <MediaCard
          title="REACH FOR THE STARS!"
          primaryAction={{
            content: "Astronomy Picture of the Day",
            onClick: this.handleClick,
          }}
          description="Discover a universe where Shopify can power up your entrepreneurial journey."
          popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
          size="small"
        >
          <img
            className="Polaris-MediaCard__hero-image"
            alt="Stars"
            src={HeroStars}
          />
        </MediaCard>
      </>
    );
  }
}
