import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const Games = () => {
  const { isLoading, isError, data } = useQuery(["secret"], {
    queryFn: () => {
      return axios.get("http://localhost:8000/secret", {
        withCredentials: true,
      });
    },
  });
  if (isLoading) return "Loading...";

  if (isError) return "An error has occurred...";
  return (
    <>
      <h4>Games</h4>
    </>
  );
};

export default Games;
