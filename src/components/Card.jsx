export default function Card({ game }) {
  return (
    <div className="card text-bg-dark border-0 h-100">
      <img
        src={"/img/" + game.cover_url}
        alt={"cover-" + game.title}
        className="card-img rounded"
      />
      <div className="card-body">
        <div className="d-flex justify-content-center align-items-center text-center h-100">
          <h5 className="card-title">{game.title}</h5>
        </div>
      </div>
    </div>
  );
}
