import Carousel from "../components/Carousel";

export default function HomePage({ games }) {
  return (
    <>
      <Carousel games={games} />
    </>
  );
}
