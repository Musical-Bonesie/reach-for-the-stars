import { Component } from "react";
import { MediaCard } from "@shopify/polaris";

export default class MarsPhotos extends Component {
  render() {
    return (
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
        <button></button>
      </MediaCard>
    );
  }
}
