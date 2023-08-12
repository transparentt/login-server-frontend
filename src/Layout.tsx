import { ReactNode } from "react";
import Grid from "@mui/material/Unstable_Grid2";

import Nav from "./Nav.tsx";
import Footer from "./Footer.tsx";
import Header from "./Header.tsx";

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <Grid container spacing={0}>
      <Header />

      <Grid xs={2.5} sx={{ bgcolor: "#232946", color: "#b8c1ec" }}>
        <Nav />
      </Grid>

      <Grid xs={9.5} sx={{ bgcolor: "#232946", color: "#b8c1ec" }}>
        <main>{children}</main>
      </Grid>

      <Footer />
    </Grid>
  );
};

export default Layout;
