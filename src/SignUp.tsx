import { useForm, SubmitHandler } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

type SignUp = {
  username: string;
  password: string;
};

function SignUp() {
  const { register, handleSubmit } = useForm<SignUp>();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (signUp: SignUp) => {
      return axios.post(
        "http://localhost:8000/users",
        {
          user_name: signUp.username,
          password: signUp.password,
        },
        { withCredentials: true }
      );
    },
  });

  const onSubmit: SubmitHandler<SignUp> = async (login) => {
    await mutation.mutate(login);
  };
  return (
    <>
      <div>
        <h4>会員登録</h4>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextField
              required
              id="outlined-required"
              label="ID"
              {...register("username")}
            />
          </div>
          <div>
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
              {...register("password")}
            />
          </div>
          <div>
            <Button variant="contained" type="submit">
              登録
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
