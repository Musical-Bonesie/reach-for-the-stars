import { Component } from "react";
import { getMarsPhotos } from "../../utils/dataUtils";
import StarIcon from "../../assets/images/like-star.svg";

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

  handleClick = (event) => {
    this.props.history.push("/");
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
        <h1 className="marsCard__header">HELLO! I'M FROM MARS</h1>
        <div className="cards">
          {marsPhotos.map((photo) => {
            return (
              <section className="marsCard" key={photo.id}>
                <h1 className="marsCard__heading">{photo.camera.full_name}</h1>
                <h2 className="marsCard__heading">
                  Rover name: {photo.rover.name}
                </h2>
                <h3 className="marsCard__date">Date: {photo.earth_date}</h3>

                <img
                  className="marsCard__mars-image"
                  alt="Stars"
                  src={photo.img_src}
                />

                <button
                  className={`marsCard__btn-${photo.like}`}
                  onClick={(event) => this.handleLike(event, photo.id)}
                >
                  <img
                    className="marsCard__star-icon"
                    src={StarIcon}
                    alt="star icon for like button"
                  />
                  {photo.like}
                </button>
              </section>
            );
          })}
        </div>
      </>
    );
  }
}
