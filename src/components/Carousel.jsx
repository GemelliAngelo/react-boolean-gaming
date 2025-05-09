export default function Carousel({ games }) {
  let randomNumber;
  const randomElement = () => {
    const number = Math.floor(Math.random() * (games.length + 1) + 1);
    randomNumber = number;
    return randomNumber;
  };
  return (
    randomElement() && (
      <div className="row justify-content-center align-items-center">
        <div className="col-12 col-lg-8">
          <div
            id="gamesCarousel"
            className="carousel slide"
            data-bs-ride="true"
          >
            <div className="carousel-inner">
              {games &&
                games.map((game) => (
                  <div
                    key={game.id}
                    className={`carousel-item ${
                      game.id == randomNumber ? "active" : ""
                    }`}
                    data-bs-interval="2000"
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
              data-bs-target="#gamesCarousel"
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
              data-bs-target="#gamesCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    )
  );
}
