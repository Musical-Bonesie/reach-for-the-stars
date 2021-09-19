import { Component } from "react";
import { getAllImages } from "../../utils/dataUtils";
import ShootingStars from "../../components/ShootingStars/ShootingStars";
import StarIcon from "../../assets/images/like-star.svg";
import MarsPhotos from "../../components/MarsPhotos/MarsPhotos";
import "./Apod.scss";
//TODO remember to add photo alt {}

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
    // TODO event.preventDefault();
    this.setState({ liked: !this.state.liked });
  };

  backHome = (event) => {
    this.props.history.push("/");
  };
  render() {
    //TODO add logic so it renders the <img/> is APOD is image and <iframe/> if medie type is a video
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
    return (
      <>
        <div>
          <ShootingStars />
        </div>
        <div>
          <section className="card">
            <h1 className="card__heading">Astronomy Picture of the Day</h1>
            {/* TODO use logic to change className to hid mediatype depending on day */}
            <figure className="card__figure">
              <img className="card__image" src={APOD.hdurl} alt={APOD.title} />
              {/* TODO check API if videos and images are given <iframe
                className="card__image"
                preload="metadata"
                title={APOD.title}
                poster={APOD.url}
                src={`${APOD.url}&autoplay=1&mute=1`}
              >
                <source
                  type={APOD.media_type}
                  src={`${APOD.url}&autoplay=1&mute=1`}
                />
                your browser does not support the iframe tag.
              </iframe> */}
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
