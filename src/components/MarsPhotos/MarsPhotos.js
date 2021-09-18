import { Component } from "react";
import { MediaCard } from "@shopify/polaris";
import { getMarsPhotos } from "../../utils/dataUtils";
import "./MarsPhotos.scss";

export default class MarsPhotos extends Component {
  state = {
    marsPhotos: null,
    like: "Like",
    liked: "Liked",
  };

  componentDidMount() {
    getMarsPhotos()
      .then((res) => {
        res.data.photos.map((obj) => {
          return Object.defineProperty(obj, "like", {
            value: "Like",
            configurable: true,
            writable: true,
          });
        });
        this.setState({
          marsPhotos: res.data.photos,
        });
      })
      .catch((error) => {
        console.log("issue with componentDidMount", error);
      });
  }

  handleClick = (event, id) => {
    // event.preventDefault();
    console.log("take me home?");
  };

  handleLike = (event, clickedId) => {
    let photos = this.state.marsPhotos;
    const findClickedPhoto = photos.find((photo) => photo.id === clickedId);
    console.log(findClickedPhoto);
    if (findClickedPhoto.like === "Like") {
      console.log("IF", findClickedPhoto.like);
      findClickedPhoto.like = "Liked";
    } else {
      findClickedPhoto.like = "Like";
    }

    this.setState({ marsPhotos: photos });
  };

  render() {
    console.log("Mars Photos   :", this.state.marsPhotos);
    const marsPhotos = this.state.marsPhotos;

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
          //   photo.like = "Like";
          //   console.log(photo);
          //   const text = photo.like ? "Liked" : "Like";
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
              <button onClick={(event) => this.handleLike(event, photo.id)}>
                {photo.like}
              </button>
            </section>
          );
        })}
      </>
    );
  }
}
