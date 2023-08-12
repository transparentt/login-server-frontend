import { ReactNode } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Link, Box } from "@mui/material";

import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid xs={11}>
        <h2>Control Panel</h2>
      </Grid>
      <Grid xs={1}>
        <Link href="/login" underline="hover">
          Login
        </Link>
        /
        <Link href="/register" underline="hover">
          Register
        </Link>
      </Grid>

      <Grid xs={2}>
        <Nav></Nav>
      </Grid>
      <Grid xs={10}>{children}</Grid>
      <Grid xs={12}>
        <Footer></Footer>
      </Grid>
    </Grid>
  );
};

export default Layout;
