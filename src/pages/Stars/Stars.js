import Placeholder from "../../assets/images/placeholder-stars.jpg";
import "./Stars.scss";
//TODO remember to add photo alt {}
export default function Stars() {
  return (
    <>
      <h1>Stars page</h1>
      <section className="card">
        <figure className="card__figure">
          <img className="card__image" src={Placeholder} alt="description" />
        </figure>
        <article className="card__header">
          <h1 className="card__title">Star Title</h1>
          <p>lorem ipsum dolor sit amet, </p>
        </article>
        <div className="card__button">
          <span>Like</span>
        </div>
      </section>
    </>
  );
}
