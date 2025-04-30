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
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
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
          </div>
        </div>
      </div>
    )
  );
}
