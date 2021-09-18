import { Component } from "react";
import { MediaCard } from "@shopify/polaris";
import { getMarsPhotos } from "../../utils/dataUtils";
import "./MarsPhotos.scss";

export default class MarsPhotos extends Component {
  state = {
    marsPhotos: null,
    liked: false,
  };

  componentDidMount() {
    getMarsPhotos()
      .then((res) => {
        this.setState({ marsPhotos: res.data.photos });
      })
      .catch((error) => {
        console.log("issue with componentDidMount", error);
      });
  }

  handleClick = (event, id) => {
    // event.preventDefault();
    console.log("take me home?");
  };

  handleLike = (event, id) => {
    console.log("ID :", id, event);
  };
  render() {
    console.log("Mars Photos   :", this.state.marsPhotos);
    const marsPhotos = this.state.marsPhotos;
    // const text = this.state.liked ? "Like" : "Liked";

    if (marsPhotos === null) {
      return (
        <>
          <img
            className="marsphotos__loading"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
            alt="loading"
          />
        </>
      );
    }
    return (
      <>
        <h1>HELLO! I'M FROM MARS</h1>
        {marsPhotos.map((photo) => {
          return (
            <section className="mars__card" key={photo.id}>
              <h1 className="mars__heading">
                Camera name: {photo.camera.full_name}
              </h1>
              <h2 className="mars__heading">Rover name: {photo.rover.name}</h2>
              <h3 className="mars__date">Date: {photo.earth_date}</h3>
              <MediaCard
                title={photo.full_name}
                primaryAction={{
                  content: "Take me home",
                  onClick: this.handleClick,
                }}
                description={photo.camera.full_name}
                popoverActions={[{ content: "Dismiss", onAction: () => {} }]}
                size="small"
              >
                <img
                  className="Polaris-MediaCard__mars-image"
                  alt="Stars"
                  src={photo.img_src}
                />
              </MediaCard>
              <button onClick={(event) => this.handleLike(photo.id, event)}>
                Like
              </button>
            </section>
          );
        })}
      </>
    );
  }
}
