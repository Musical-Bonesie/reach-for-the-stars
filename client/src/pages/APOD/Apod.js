import { Component } from "react";
import { getAllImages } from "../../utils/dataUtils";
import ShootingStars from "../../components/ShootingStars/ShootingStars";
import StarIcon from "../../assets/images/like-star.svg";
import MarsPhotos from "../../components/MarsPhotos/MarsPhotos";
import "./Apod.scss";

export default class Stars extends Component {
  state = {
    APOD: null,
    liked: false,
  };

  componentDidMount() {
    getAllImages()
      .then((res) => {
        this.setState({ APOD: res.data });
      })
      .catch((error) => {
        console.log("error in DidMount", error);
      });
  }
  handleClick = (event) => {
    this.setState({ liked: !this.state.liked });
  };

  backHome = (event) => {
    this.props.history.push("/");
  };
  render() {
    const text = this.state.liked ? "Liked" : "Like";
    console.log("APOD:", this.state.APOD);
    const APOD = this.state.APOD;

    if (APOD === null) {
      return (
        <>
          <img
            className="apod__loading"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
            alt="loading"
          />
        </>
      );
    }
    console.log(APOD.media_type);
    return (
      <>
        <div>
          <ShootingStars />
        </div>
        <div>
          <section className="card">
            <h1 className="card__heading">Astronomy Picture of the Day</h1>
            <figure className="card__figure">
              <iframe
                className={`card__video  ${
                  APOD.media_type === "video" ? "media--visable" : "media--hide"
                }`}
                src={`${APOD.url}&autoplay=1&mute=1`}
                title={APOD.title}
              ></iframe>
              <img
                className={`card__image  ${
                  APOD.media_type === "image" ? "media--visable" : "media--hide"
                }`}
                src={APOD.hdurl}
                alt={APOD.title}
              />
            </figure>
            <article className="card__header">
              <h1 className="card__content">{APOD.title}</h1>
              <h2 className="card__copy">{APOD.date}</h2>
              <p className="card__copy">{APOD.explanation}</p>
            </article>
            <div className="card__button">
              <button
                className={`card__btn-${text}`}
                onClick={this.handleClick}
              >
                <img
                  className="card__star-icon"
                  src={StarIcon}
                  alt="star icon for like button"
                />
                {text}
              </button>
            </div>
            <button className="Polaris-Button" onClick={this.backHome}>
              Take Me Back Home
            </button>
          </section>
        </div>

        <MarsPhotos />
        <a className="icon__ref" href="https://dryicons.com/free-icons/star">
          StarIcon by Dryicons{" "}
        </a>
      </>
    );
  }
}
