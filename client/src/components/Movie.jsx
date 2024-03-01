import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  return <div>this is specific Movie and has an id of {id}</div>;
};

export default Movie;
