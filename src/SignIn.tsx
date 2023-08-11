import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type Login = {
  username: string;
  password: string;
};

function SignIn() {
  const { register, handleSubmit } = useForm<Login>();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (login: Login) => {
      return axios.post(
        "http://localhost:8000/login",
        {
          user_name: login.username,
          password: login.password,
        },
        { withCredentials: true }
      );
    },
  });

  const onSubmit: SubmitHandler<Login> = async (login) => {
    await mutation.mutate(login);
  };
  return (
    <>
      <div>
        <h2>Login</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextField
              required
              id="outlined-required"
              label="IDを入力する"
              {...register("username")}
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-password-input"
              label="Passwordを入力する"
              type="password"
              autoComplete="current-password"
              margin="normal"
              {...register("password")}
            />
          </div>
          <div>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </div>
        </form>
      </div>
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

export default SignIn;
