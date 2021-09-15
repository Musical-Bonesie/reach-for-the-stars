import { Component } from "react";
import { getAllImages } from "../../utils/dataUtils";
import "./Apod.scss";
import ShootingStars from "../../components/ShootingStars/ShootingStars";
//TODO remember to add photo alt {}

export default class Stars extends Component {
  state = {
    APOD: null,
  };

  componentDidMount() {
    getAllImages()
      .then((res) => {
        this.setState({ APOD: res.data });
      })
      .catch((error) => {
        console.log("error in didmount", error);
      });
  }

  render() {
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
        <section className="card">
          <h1 className="card__heading">Astronomy Picture of the Day</h1>

          <figure className="card__figure">
            <img className="card__image" src={APOD.hdurl} alt={APOD.title} />
          </figure>
          <article className="card__header">
            <h1 className="card__content">{APOD.title}</h1>
            <h2 className="card__copy">{APOD.date}</h2>
            <p className="card__copy">{APOD.explanation}</p>
          </article>
          <div className="card__button">
            <button onClick={console.log("click!")}>Like</button>
          </div>
        </section>
        <ShootingStars />
      </>
    );
  }
}
