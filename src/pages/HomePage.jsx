import Carousel from "../components/Carousel";

export default function HomePage({ games, genres }) {
  return (
    <>
      <div className="text-center py-4 mb-4">
        <img
          className="logo-title"
          src="src/assets/img/logo-small-transparent.png"
          alt="logo"
        />
        <h1 className="d-inline align-middle">BOOLEAN GAMING</h1>
      </div>
      <Carousel games={games} />
      <hr />
      <div className="row g-4">
        <div className="col-12">
          <h2>Categorie più Ricercate</h2>
        </div>
        {genres &&
          genres
            .filter((genre) => genre.id < 4)
            .map((genre) => (
              <div key={genre.id} className="col-12 col-md-4 text-center">
                <a
                  className={`btn btn-lg btn-custom-${genre.id} bg-gradient w-100`}
                >
                  {genre.name}
                </a>
              </div>
            ))}
      </div>
    </>
  );
}
