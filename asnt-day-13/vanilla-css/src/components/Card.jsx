export default function Card({ image }) {
  return (
    <article className="card">
      <img className="card-img" src={image} alt="card" />
    </article>
  );
}
