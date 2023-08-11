import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "@mui/material";

function Secret() {
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
      <h2>Login status</h2>
      <div>Status: {data.data}</div>
      <div>
        <p></p>
      </div>
      <div>
        <Link href="/" underline="hover">
          Top
        </Link>
      </div>
    </>
  );
}

export default Secret;
