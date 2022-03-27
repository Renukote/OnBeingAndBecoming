import { Grid, Typography } from "@mui/material";
import React from "react";
import Header from "../Components/Header";
import { quote } from "../Data/homePageData";
import { whatToExpect } from "../Data/homePageData";
import "./style.css";
import ActionAreaCard from "../Components/Card";

const HomePage = () => {
  return (
    <>
      <Header />
      <Grid xs={12} container sx={{margin: "70px 0px 0px 0px"}}>
        <img
          src="https://imgs.search.brave.com/mZaIapRaZikVrHyWYyKsY2u5O7WYCQApTbV8fcinYzg/rs:fit:1200:350:1/g:ce/aHR0cHM6Ly93d3cu/c2V0YXN3YWxsLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ny8wNi9MaW5rZWRp/bi1CYWNrZ3JvdW5k/cy0xNC0xNDAwLXgt/MzUwLnBuZw"
          alt="landing page img"
          className="homepage-img"
        />
      </Grid>

      <Grid container xs={12}>
        <Grid item xs={2}></Grid>

        <Grid item xs={8} className="quote" justifyContent="center">
          {quote}
        </Grid>

        <Grid item xs={2}></Grid>
      </Grid>

      <Typography
        variant="h2"
        sx={{ textAlign: "center", fontFamily: "Gilroy", fontWeight: 500 }}
      >
        What to expect?
      </Typography>

      <Grid container xs={11} spacing={10} sx={{ margin: "20px 30px" }} justifyContent="center">
        {whatToExpect.map((ele, ind) => (
          <Grid item xs={10} md={3.8} >
            <ActionAreaCard {...ele}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomePage;
