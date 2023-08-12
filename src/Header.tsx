import Grid from "@mui/material/Unstable_Grid2";
import { Link } from "@mui/material";

import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";

const Header = () => {
  return (
    <>
      <Grid xs={11.3}>
        <h2>管理画面</h2>
      </Grid>
      <Grid xs={0.7}>
        <Link href="/register" underline="hover">
          <HowToRegIcon />
        </Link>
        <Link href="/login" underline="hover">
          <LoginIcon />
        </Link>
      </Grid>
    </>
  );
};

export default Header;
