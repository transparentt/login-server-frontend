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
  if (isLoading) return "読み込み中...";

  if (isError) return "エラーが起こりました...";
  return (
    <>
      <h4>Game List</h4>
    </>
  );
};

export default Games;
