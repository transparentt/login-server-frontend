import { Link } from "@mui/material";

function App() {
  return (
    <>
      <h2>Login Server</h2>
      <div>
        <ul>
          <li>
            <Link href="/register" underline="hover">
              Sign Up
            </Link>
          </li>
          <li>
            <Link href="/login" underline="hover">
              Login
            </Link>
          </li>
          <li>
            <Link href="/secret" underline="hover">
              Login Status
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
