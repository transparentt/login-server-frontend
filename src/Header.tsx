import Grid from "@mui/material/Unstable_Grid2";
import { Link, textFieldClasses } from "@mui/material";

import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";

const Header = () => {
  return (
    <>
      <Grid xs={11.3} sx={{ bgcolor: "#232946", color: "white" }}>
        <h2>Control Panel</h2>
      </Grid>
      <Grid xs={0.7} sx={{ bgcolor: "#232946" }}>
        <Link href="/register" underline="hover">
          <HowToRegIcon sx={{ color: "white" }} />
        </Link>
        <Link href="/login" underline="hover">
          <LoginIcon sx={{ color: "white" }} />
        </Link>
      </Grid>
    </>
  );
};

export default Header;
