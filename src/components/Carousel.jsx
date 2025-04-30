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
          <div id="gamesCarousel" className="carousel slide">
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
              class="carousel-control-prev"
              type="button"
              data-bs-target="#gamesCarousel"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#gamesCarousel"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    )
  );
}
