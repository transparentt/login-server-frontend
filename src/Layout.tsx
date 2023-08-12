import { ReactNode } from "react";
import Grid from "@mui/material/Unstable_Grid2";

import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <Grid container spacing={2}>
      <Header />

      <Grid xs={2}>
        <Nav />
      </Grid>

      <Grid xs={10}>
        <main>{children}</main>
      </Grid>

      <Footer />
    </Grid>
  );
};

export default Layout;
