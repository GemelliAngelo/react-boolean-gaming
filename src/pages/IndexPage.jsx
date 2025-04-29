import Card from "../components/Card";

export default function IndexPage({ games }) {
  return (
    <div className="row g-5">
      <div className="col-12">
        <h1 className="my-4">Tutti i Giochi</h1>
      </div>
      {games &&
        games.map((game) => (
          <div key={game.id} className="col-12 col-md-6 col-xxl-4">
            <Card game={game} />
          </div>
        ))}
    </div>
  );
}
