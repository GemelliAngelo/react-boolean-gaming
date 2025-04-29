export default function Carousel({ games }) {
  let randomNumber;
  const randomElement = () => {
    randomNumber = Math.floor(Math.random() * (games.length + 1) + 1);
    return randomNumber;
  };
  return (
    randomElement() && (
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          {games &&
            games.map((game) => (
              <div
                key={game.id}
                className={`carousel-item ${
                  game.id == randomNumber ? "active" : ""
                }`}
              >
                <img
                  src={"img/" + game.cover_url}
                  alt={"cover-" + game.title}
                  className="d-block w-100"
                />
              </div>
            ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  );
}
